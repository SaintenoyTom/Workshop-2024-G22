"use client";

import { useState, useEffect, ChangeEvent, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function MedicalQuestionnaireCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    age: 0,
    height: "",
    weight: "",
    gender: "",
    ville: "",
    symptoms: [] as string[],
  });
  const [diagnosis, setDiagnosis] = useState("");
  const [advice, setAdvice] = useState("");
  const [checkup, setCheckup] = useState("");
  const [recommendations, setRecommendations] = useState<string[]>([""]);
  const [loading, setLoading] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [commonSymptoms, setCommonSymptoms] = useState([
    "Fièvre",
    "Toux",
    "Fatigue",
    "Maux de tête",
    "Douleurs musculaires",
  ]);

  const symptomInput = useRef<null | HTMLInputElement>(null);

  useEffect(() => {
    const savedData = localStorage.getItem("medicalQuestionnaire");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("medicalQuestionnaire", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSymptomToggle = (symptom: string) => {
    setFormData((prev) => ({
      ...prev,
      symptoms: prev.symptoms.includes(symptom)
        ? prev.symptoms.filter((s) => s !== symptom)
        : [...prev.symptoms, symptom],
    }));
  };

  const handleNewSymptom = () => {
    if (!symptomInput.current) return;

    const newSymptom = symptomInput.current.value;

    if (newSymptom.length && !formData.symptoms.includes(newSymptom)) {
      setFormData((prev) => ({
        ...prev,
        symptoms: [...prev.symptoms, newSymptom],
      }));

      setCommonSymptoms((prev) => [...prev, newSymptom]);
    }

    symptomInput.current.value = "";
  };

  const handleSubmit = async () => {
    setLoading(true);

    try {
      // Simuler l'envoi à ChatGPT et obtenir un diagnostic
      const diagnosisResponse = await fetch("/api/completions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const diagnosisData = await diagnosisResponse.json();
      const cleanedResponse = diagnosisData.response
        .replace(/```json|```/g, "")
        .trim();
      const jsonReponse = JSON.parse(cleanedResponse);
      console.log();
      setDiagnosis(jsonReponse?.diagnosis); // Remplacer "test" par diagnosisData.diagnosis
      setAdvice(jsonReponse?.advice);
      setCheckup(jsonReponse?.checkup);
      setRecommendations(jsonReponse?.recommendations);
      setCurrentSlide(currentSlide + 1);
    } catch (error) {
      console.error("Erreur dans le traitement de la réponse :", error);
    } finally {
      setLoading(false);
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const normalizeString = (str: string) =>
    str
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/\s/g, "-");

  const slides = [
    // Slide 0: Informations personnelles
    <div
      key="personal-info"
      className="space-y-4 bg-[#4400ff]/10 p-6 rounded-lg shadow-md flex flex-col"
    >
      <h2 className="text-2xl font-bold text-[#4400ff]">
        Informations personnelles
      </h2>
      <div>
        <Label htmlFor="age" className="text-[#4400ff]">
          Âge
        </Label>
        <Input
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
          placeholder="Âge"
        />
      </div>
      <div>
        <Label htmlFor="height" className="text-[#4400ff]">
          Taille (cm)
        </Label>
        <Input
          id="height"
          name="height"
          value={formData.height}
          onChange={handleInputChange}
          placeholder="Taille"
        />
      </div>
      <div>
        <Label htmlFor="weight" className="text-[#4400ff]">
          Poids (kg)
        </Label>
        <Input
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleInputChange}
          placeholder="Poids"
        />
      </div>
      <div>
        <Label htmlFor="weight" className="text-[#4400ff]">
          Ville
        </Label>
        <Input
          id="ville"
          name="ville"
          value={formData.ville}
          onChange={handleInputChange}
          placeholder="Ville"
        />
      </div>
      <div>
        <Label className="text-[#4400ff]">Genre</Label>
        <RadioGroup
          name="gender"
          value={formData.gender}
          onValueChange={(value) =>
            setFormData((prev) => ({ ...prev, gender: value }))
          }
        >
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="male" id="male" />
              <Label htmlFor="male" className="text-[#4400ff]">
                Homme
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="female" id="female" />
              <Label htmlFor="female" className="text-[#4400ff]">
                Femme
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="other" id="other" />
              <Label htmlFor="other" className="text-[#4400ff]">
                Autre
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem
                value="prefer_not_to_say"
                id="prefer_not_to_say"
              />
              <Label htmlFor="prefer_not_to_say" className="text-[#4400ff]">
                Je préfère ne pas répondre
              </Label>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>,

    // Slide 1: Symptômes
    <div
      key="symptoms"
      className="space-y-4 bg-[#4400ff]/10 p-6 rounded-lg shadow-md flex flex-col"
    >
      <h2 className="text-2xl font-bold text-[#4400ff]">Symptômes</h2>
      {commonSymptoms.map((symptom) => (
        <div key={symptom} className="flex items-center space-x-2">
          <Checkbox
            id={symptom}
            checked={formData.symptoms.includes(symptom)}
            onCheckedChange={() => handleSymptomToggle(symptom)}
            className="border-[#4400ff] text-[#4400ff]"
          />
          <Label htmlFor={symptom} className="text-[#4400ff]">
            {symptom}
          </Label>
        </div>
      ))}
      <div className="flex space-x-2">
        <Input
          placeholder="Autre symptôme"
          ref={symptomInput}
          className="bg-white/50 border-[#4400ff]/50 focus:border-[#4400ff]"
        />
        <Button
          onClick={handleNewSymptom}
          className="bg-[#4400ff] hover:bg-[#4400ff]/80 text-white"
        >
          Ajouter
        </Button>
      </div>
      <hr className="h-px my-8 bg-[#4400ff] border-0 dark:bg-[#4400ff]" />
      <div className="flex items-center space-x-2">
        <Checkbox
          id="terms"
          checked={termsAccepted}
          onCheckedChange={(checked) => setTermsAccepted(Boolean(checked))}
          className="border-[#4400ff] text-[#4400ff]"
        />
        <Label htmlFor="terms" className="text-[#4400ff] cursor-pointer">
          <Link
            className="text-[#4400ff]/70 hover:underline"
            target="_blank"
            href="/conditions"
          >
            J&apos;accepte les conditions d&apos;utilisation du site
          </Link>
        </Label>
      </div>
    </div>,

    // Slide 3: Diagnostic et recommandations
    <div
      key="diagnosis"
      className="space-y-4 bg-[#4400ff]/10 p-6 rounded-lg shadow-md border border-[#4400ff]/20 flex flex-col"
    >
      <h2 className="text-2xl font-bold text-[#4400ff]">Diagnostic</h2>
      <p className="text-sm text-[#4400ff]/80">
        Ce diagnostic est fourni à titre informatif uniquement et ne remplace
        pas l&apos;avis d&apos;un professionnel de santé.
      </p>
      <Textarea
        value={diagnosis}
        readOnly
        className="h-40 bg-white/50 border-[#4400ff]/50 focus:border-[#4400ff] text-[#4400ff]"
      />

      <h3 className="text-xl font-semibold text-[#4400ff]">Conseils</h3>
      <Textarea
        value={advice}
        readOnly
        className="h-40 bg-white/50 border-[#4400ff]/50 focus:border-[#4400ff] text-[#4400ff]"
      />

      <h3 className="text-xl font-semibold text-[#4400ff]">Bilan de santé</h3>
      <p className="text-sm text-[#4400ff]/80">
        Attention ce bilan de santé est fourni à titre informatif uniquement et
        ne remplace pas l&apos;avis d&apos;un professionnel de santé.
      </p>
      <Textarea
        value={checkup}
        readOnly
        className="h-40 bg-white/50 border-[#4400ff]/50 focus:border-[#4400ff] text-[#4400ff]"
      />

      <h3 className="text-xl font-semibold text-[#4400ff]">
        Rendez-vous médicaux recommandés
      </h3>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#4400ff]">Spécialité</TableHead>
            <TableHead className="text-[#4400ff] pl-8">
              Recherche Doctolib
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recommendations &&
            recommendations.map((rec) => (
              <TableRow key={rec}>
                <TableCell className="text-[#4400ff]/80">{rec}</TableCell>
                <TableCell>
                  <a
                    href={`https://www.doctolib.fr/${normalizeString(
                      rec
                    )}/${normalizeString(formData.ville)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4400ff] hover:text-[#4400ff] underline font-medium hover:font-bold px-4 leading-[1.2] tracking-wide hover:tracking-normal transition-all duration-200"
                  >
                    Rechercher sur Doctolib
                  </a>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </div>,
  ];

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <h1 className="text-3xl font-bold mb-6 text-[#4400ff] text-center">
        Questionnaire Médical
      </h1>
      <div className="relative">
        {slides[currentSlide]}
        <div className="mt-6 flex justify-between">
          <Button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            variant="outline"
            className="bg-[#4400ff]/20 text-[#4400ff] hover:bg-[#4400ff]/30 border-[#4400ff]"
          >
            <ChevronLeft className="mr-2 h-4 w-4" /> Précédent
          </Button>
          {currentSlide < slides.length - 2 ? (
            <Button
              onClick={nextSlide}
              className="bg-[#4400ff] text-white hover:bg-[#4400ff]/80"
            >
              Suivant <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          ) : currentSlide === slides.length - 2 ? (
            <Button
              onClick={handleSubmit}
              disabled={!termsAccepted}
              className="bg-[#4400ff] text-white hover:bg-[#4400ff]/80"
            >
              {loading ? (
                <span className="loader"></span> // Affichez le loader ici
              ) : (
                "Soumettre"
              )}
            </Button>
          ) : (
            // Ne rien afficher sur la dernière diapositive
            <div />
          )}
        </div>
      </div>
    </div>
  );
}

