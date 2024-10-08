import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { CardContent, Card } from "@/components/ui/card"
import { HeartPulse } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen ">
      <main className="flex-1 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-[#4400ff]">
                  Votre santé, notre priorité
                </h1>
                <p className="mx-auto max-w-[700px] text-[#4400ff]/50 md:text-xl">
                  Des conseils médicaux personnalisés pour vous aider à prendre les meilleures décisions pour votre santé.
                </p>
              </div>
              <div>
                <Button className=' text-black bg-[#bbff00]'>Obtenir un conseil</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 bg-cover bg-[url('./images/imageC1.jpeg')]">
          <div className="container px-4 md:px-6">
            <h2 className="text-[#4400ff] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Nos services
            </h2>
            <Card className="max-w-3xl mx-auto">
              <CardContent className="p-6">
                <p className="text-center text-lg text-[#4400ff]/50 dark:text-gray-300">
                  Chez Conseil Médical, nous nous concentrons exclusivement sur la fourniture de conseils de santé personnalisés. 
                  Notre équipe d'experts médicaux est dédiée à vous offrir des recommandations précises et adaptées à votre situation individuelle, 
                  vous aidant ainsi à prendre les meilleures décisions pour votre bien-être.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className=" text-[#4400ff] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8">
              Ce que disent nos patients
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <p className="text-[#4400ff]/50">
                    "Les conseils que j'ai reçus m'ont vraiment aidé à améliorer ma santé. Je me sens beaucoup mieux maintenant !"
                  </p>
                  <p className=" text-[#4400ff] mt-4 font-semibold">Marie D.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-[#4400ff]/50">
                    "L'équipe est très professionnelle et à l'écoute. Je recommande vivement leurs services."
                  </p>
                  <p className=" text-[#4400ff] mt-4 font-semibold">Pierre L.</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-[#4400ff]/50">
                    "Grâce à leur suivi personnalisé, j'ai enfin réussi à atteindre mes objectifs de santé."
                  </p>
                  <p className=" text-[#4400ff] mt-4 font-semibold">Sophie M.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className=" text-[#4400ff] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Prêt à prendre soin de votre santé ?
                </h2>
                <p className="mx-auto max-w-[700px] text-[#4400ff]/50">
                  Contactez-nous dès aujourd'hui pour obtenir un conseil ou pour toute question.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-2">
                  <Input placeholder="Votre email" type="email" />
                  <Button type="submit" className='text-black bg-[#bbff00]'>Nous contacter</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Conseil Médical. Tous droits réservés.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Mentions légales
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Confidentialité
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Conditions d'utilisation
          </Link>
        </nav>
      </footer>
    </div>
  )
}