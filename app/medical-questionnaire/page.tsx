'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function MedicalQuestionnaireCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [formData, setFormData] = useState({
    age: '',
    height: '',
    weight: '',
    gender: '',
    symptoms: [],
    customSymptom: '',
    termsAccepted: false
  })
  const [diagnosis, setDiagnosis] = useState('')

  useEffect(() => {
    const savedData = localStorage.getItem('medicalQuestionnaire')
    if (savedData) {
      setFormData(JSON.parse(savedData))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('medicalQuestionnaire', JSON.stringify(formData))
  }, [formData])

  const commonSymptoms = ['Fièvre', 'Toux', 'Fatigue', 'Maux de tête', 'Douleurs musculaires']

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSymptomToggle = (symptom) => {
    setFormData(prev => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter(s => s !== symptom)
        : [...prev.symptoms, symptom]
    }))
  }

  const handleCustomSymptom = () => {
    if (formData.customSymptom && !formData.symptoms.includes(formData.customSymptom)) {
      setFormData(prev => ({
        ...prev,
        symptoms: [...prev.symptoms, prev.customSymptom],
        customSymptom: ''
      }))
    }
  }

  const handleSubmit = async () => {
    // Simuler l'envoi à ChatGPT et obtenir un diagnostic
    const diagnosisResponse = await fetch('/api/getDiagnosis', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
    const diagnosisData = await diagnosisResponse.json()
    setDiagnosis(diagnosisData.diagnosis)
    setCurrentSlide(currentSlide + 1)
  }

  const nextSlide = () => {
    setCurrentSlide(prev => Math.min(prev + 1, 3))
  }

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(prev - 1, 0))
  }

  const slides = [
    // Slide 0: Informations personnelles
    <div key="personal-info" className="space-y-4 bg-[#7f00ff]/10 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#7f00ff]">Informations personnelles</h2>
      <div>
        <Label htmlFor="age" className="text-[#7f00ff]">Âge</Label>
        <Input id="age" name="age" value={formData.age} onChange={handleInputChange} placeholder="Âge" />
      </div>
      <div>
        <Label htmlFor="height" className="text-[#7f00ff]">Taille (cm)</Label>
        <Input id="height" name="height" value={formData.height} onChange={handleInputChange} placeholder="Taille" />
      </div>
      <div>
        <Label htmlFor="weight" className="text-[#7f00ff]">Poids (kg)</Label>
        <Input id="weight" name="weight" value={formData.weight} onChange={handleInputChange} placeholder="Poids" />
      </div>
      <div>
        <Label className="text-[#7f00ff]">Genre</Label>
        <RadioGroup name="gender" value={formData.gender} onValueChange={(value) => setFormData(prev => ({ ...prev, gender: value }))}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="male" id="male" />
            <Label htmlFor="male" className="text-[#7f00ff]">Homme</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="female" id="female" />
            <Label htmlFor="female" className="text-[#7f00ff]">Femme</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="other" id="other" />
            <Label htmlFor="other" className="text-[#7f00ff]">Autre</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="prefer_not_to_say" id="prefer_not_to_say" />
            <Label htmlFor="prefer_not_to_say" className="text-[#7f00ff]">Je préfère ne pas répondre</Label>
          </div>
        </RadioGroup>
      </div>
    </div>,

    // Slide 1: Symptômes
    <div key="symptoms" className="space-y-4 bg-[#7f00ff]/10 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#7f00ff]">Symptômes</h2>
      {commonSymptoms.map(symptom => (
        <div key={symptom} className="flex items-center space-x-2">
          <Checkbox
            id={symptom}
            checked={formData.symptoms.includes(symptom)}
            onCheckedChange={() => handleSymptomToggle(symptom)}
            className="border-[#7f00ff] text-[#7f00ff]"
          />
          <Label htmlFor={symptom} className="text-[#7f00ff]">{symptom}</Label>
        </div>
      ))}
      <div className="flex space-x-2">
        <Input
          placeholder="Autre symptôme"
          value={formData.customSymptom}
          onChange={(e) => setFormData(prev => ({ ...prev, customSymptom: e.target.value }))}
          className="bg-white/50 border-[#7f00ff]/50 focus:border-[#7f00ff]"
        />
        <Button onClick={handleCustomSymptom} className="bg-[#7f00ff] hover:bg-[#7f00ff]/80 text-white">Ajouter</Button>
      </div>
    </div>,

    // Slide 2: Conditions d'utilisation
    <div key="terms" className="space-y-4 bg-[#7f00ff]/10 p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-[#7f00ff]">Conditions d'utilisation</h2>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={formData.termsAccepted}
          onCheckedChange={(checked) => setFormData(prev => ({ ...prev, termsAccepted: checked }))}
          className="border-[#7f00ff] text-[#7f00ff]"
        />
        <Label htmlFor="terms" className="text-[#7f00ff]">J'accepte les conditions d'utilisation du site</Label>
      </div>
    </div>,

    // Slide 3: Diagnostic et recommandations
    <div key="diagnosis" className="space-y-4 bg-[#7f00ff]/10 p-6 rounded-lg shadow-md border border-[#7f00ff]/20">
      <h2 className="text-2xl font-bold text-[#7f00ff]">Diagnostic</h2>
      <p className="text-sm text-[#7f00ff]/80">Ce diagnostic est fourni à titre informatif uniquement et ne remplace pas l'avis d'un professionnel de santé.</p>
      <Textarea value={diagnosis} readOnly className="h-40 bg-white/50 border-[#7f00ff]/50 focus:border-[#7f00ff] text-[#7f00ff]" />
      <h3 className="text-xl font-semibold text-[#7f00ff]">Rendez-vous médicaux recommandés</h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#7f00ff]">Spécialité</TableHead>
            <TableHead className="text-[#7f00ff]">Recherche Doctolib</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-[#7f00ff]/80">Médecin généraliste</TableCell>
            <TableCell>
              <a href="https://www.doctolib.fr/medecin-generaliste" target="_blank" rel="noopener noreferrer" className="text-[#7f00ff] hover:text-[#80ff00] underline">
                Rechercher sur Doctolib
              </a>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="text-[#7f00ff]/80">Dermatologue</TableCell>
            <TableCell>
              <a href="https://www.doctolib.fr/dermatologue" target="_blank" rel="noopener noreferrer" className="text-[#7f00ff] hover:text-[#80ff00] underline">
                Rechercher sur Doctolib
              </a>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ]

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-[#7f00ff] text-center">Questionnaire Médical</h1>
      <div className="relative">
        {slides[currentSlide]}
        <div className="mt-6 flex justify-between">
          <Button onClick={prevSlide} disabled={currentSlide === 0} variant="outline" className="bg-[#7f00ff]/20 text-[#7f00ff] hover:bg-[#7f00ff]/30 border-[#7f00ff]">
            <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
          </Button>
          {currentSlide < slides.length - 1 ? (
            <Button onClick={nextSlide} className="bg-[#7f00ff] text-white hover:bg-[#7f00ff]/80">
              Suivant <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button onClick={handleSubmit} disabled={!formData.termsAccepted} className="bg-[#7f00ff] text-white hover:bg-[#7f00ff]/80">
              Soumettre
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}