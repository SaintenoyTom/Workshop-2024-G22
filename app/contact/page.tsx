'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { CheckCircle } from "lucide-react"
import FormError from "@/components/ui/form-error"

export default function FormulaireCcontact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    surname: { value: "", error: false },
    name: { value: "", error: false },
    email: { value: "", error: false },
    message: { value: "", error: false },
  })

  useEffect(() => {
    if (isModalOpen) setTimeout(() => {
      setIsModalOpen(false)
    }, 5000);
  }, [isModalOpen])

  const checkFormData = () => {
    const { surname, name, email, message } = { ...formData };

    surname.error = !surname.value.length

    name.error = !name.value.length

    email.error = !email.value.length || !email.value.match(/[a-z0-9]+(?:\.[a-z0-9]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g)

    message.error = !message.value.length || message.value.length > 2000

    setFormData({ surname, name, email, message })

    return !surname.error && !name.error && !email.error && !message.error;
  }

  const handleForm = () => {
    if (!checkFormData()) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsModalOpen(true)
    }, 2000);
  }


  return (
    <div className="container mx-auto p-4 max-w-2xl">
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
      <div className="space-y-4 bg-[#4400ff]/10 p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-[#4400ff]">Contactez-nous</h2>
        <form className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nom" className="text-md text-[#4400ff]">Nom</Label>
            <FormError name="nom" isError={formData.surname.error} />
            <Input
              id="nom"
              placeholder="Votre nom"
              className="border-[#4400ff] focus:border-[#ffffff]"
              onInput={(event) => setFormData((old) => { return { ...old, surname: { value: (event.target as HTMLInputElement).value, error: old.surname.error } } })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="prenom" className="text-md text-[#4400ff]">Prénom</Label>
            <FormError name="prénom" isError={formData.name.error} />
            <Input
              id="prenom"
              placeholder="Votre prénom"
              className="border-[#4400ff] focus:border-[#ffffff]"
              onInput={(event) => setFormData((old) => { return { ...old, name: { value: (event.target as HTMLInputElement).value, error: old.name.error } } })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-md text-[#4400ff]">Email</Label>
            <FormError name="email" isError={formData.email.error} />
            <Input
              id="email"
              type="email"
              placeholder="votre@email.com"
              className="border-[#4400ff] focus:border-[#ffffff]"
              onInput={(event) => setFormData((old) => { return { ...old, email: { value: (event.target as HTMLInputElement).value, error: old.email.error } } })}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message" className="text-md text-[#4400ff]">Message</Label>
            <FormError name="message" isError={formData.message.error} />
            <Textarea
              id="message"
              placeholder="Votre message (maximum 2000 caractères)"
              className="border-[#4400ff] focus:border-[#ffffff]"
              onInput={(event) => setFormData((old) => { return { ...old, message: { value: (event.target as HTMLInputElement).value, error: old.message.error } } })}
            />
          </div>
          <div className={`flex w-full items-center justify-center`}>
            <Button
              type="button"
              className={`${isLoading ? "w-20" : "w-full"} bg-[#4400ff] hover:bg-[#3300cc] text-white font-bold py-2 px-4 rounded`}
              onClick={handleForm}
              disabled={isLoading}
            >
              {
                isLoading ? <div className='flex space-x-2 justify-center items-center dark:invert'>
                  <div className='h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:-0.3s]'></div>
                  <div className='h-3 w-3 bg-white rounded-full animate-bounce [animation-delay:-0.15s]'></div>
                  <div className='h-3 w-3 bg-white rounded-full animate-bounce'></div>
                </div> : "Envoyer"
              }
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}