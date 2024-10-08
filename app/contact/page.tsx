'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"

export default function FormulaireCcontact() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        if (isModalOpen) setTimeout(() => {
            setIsModalOpen(false)
        }, 5000);
    }, [isModalOpen])

  return (<>
    <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle className="text-[#4400ff] flex items-center gap-2">
              <CheckCircle className="h-6 w-6 text-green-500" />
              Envoi réussi !
            </DialogTitle>
            <DialogDescription>
              Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setIsModalOpen(false)} className="bg-[#4400ff] hover:bg-[#3300cc] text-white">
              Fermer
            </Button>
          </DialogFooter>
        </DialogContent>
    </Dialog>
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-lg mt-5">
      <h2 className="text-2xl font-bold mb-6 text-[#4400ff]">Contactez-nous</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="nom" className="text-[#4400ff]">Nom</Label>
          <Input 
            id="nom" 
            placeholder="Votre nom" 
            className="border-[#4400ff] focus:ring-[#4400ff] focus:border-[#4400ff]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prenom" className="text-[#4400ff]">Nom</Label>
          <Input 
            id="nom" 
            placeholder="Votre prénom" 
            className="border-[#4400ff] focus:ring-[#4400ff] focus:border-[#4400ff]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-[#4400ff]">Email</Label>
          <Input 
            id="email" 
            type="email" 
            placeholder="votre@email.com" 
            className="border-[#4400ff] focus:ring-[#4400ff] focus:border-[#4400ff]"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="message" className="text-[#4400ff]">Message</Label>
          <Textarea 
            id="message" 
            placeholder="Votre message" 
            className="border-[#4400ff] focus:ring-[#4400ff] focus:border-[#4400ff]"
          />
        </div>
        <Button 
          type="button" 
          className="w-full bg-[#4400ff] hover:bg-[#3300cc] text-white font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Envoyer
        </Button>
      </form>
    </div></>
  )
}