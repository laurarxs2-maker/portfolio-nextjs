"use client"

import emailjs from "@emailjs/browser"
import { Github, Linkedin, Mail, MessageCircle, Phone } from "lucide-react"
import { FormEvent, useState } from "react"

import { Reveal } from "@/components/effects/reveal"
import { Section, SectionTitle } from "@/components/layout/section"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/data/site"

/**
 * Contato
 * - Links sociais/telefone: data/site.ts
 * - Formulário: configure EmailJS em .env.local
 *   NEXT_PUBLIC_EMAILJS_SERVICE_ID
 *   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
 *   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
 */
export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  )
  const [message, setMessage] = useState("")

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setStatus("loading")
    setMessage("")

    const form = event.currentTarget
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error")
      setMessage(
        "Formulário em modo demo. Configure as variáveis EmailJS no .env.local.",
      )
      return
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey)
      setStatus("success")
      setMessage("Mensagem enviada com sucesso. Retorno em breve!")
      form.reset()
    } catch {
      setStatus("error")
      setMessage("Não foi possível enviar agora. Tente pelo email ou WhatsApp.")
    }
  }

  return (
    <Section id="contato">
      <Reveal>
        <SectionTitle
          eyebrow="Contato"
          title="Vamos conversar"
          description="Aberto a oportunidades, feedbacks e conversas sobre produto e front-end."
        />
      </Reveal>

      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <Card>
            <CardContent className="space-y-4 p-6">
              <p className="text-sm text-muted-foreground">
                Prefere outro canal? Me encontre nas redes:
              </p>
              <div className="flex flex-col gap-3">
                <Button asChild variant="outline" className="justify-start">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github /> GitHub
                  </a>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin /> LinkedIn
                  </a>
                </Button>
                <Button asChild variant="outline" className="justify-start">
                  <a href={`mailto:${siteConfig.social.email}`}>
                    <Mail /> {siteConfig.social.email}
                  </a>
                </Button>
                {siteConfig.social.phone ? (
                  <Button asChild variant="outline" className="justify-start">
                    <a href={`tel:+5511965620048`}>
                      <Phone /> {siteConfig.social.phone}
                    </a>
                  </Button>
                ) : null}
                {siteConfig.social.whatsapp ? (
                  <Button asChild variant="outline" className="justify-start">
                    <a
                      href={siteConfig.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <MessageCircle /> WhatsApp {siteConfig.social.phone}
                    </a>
                  </Button>
                ) : null}
              </div>
            </CardContent>
          </Card>
        </Reveal>

        <Reveal delay={0.08}>
          <Card>
            <CardContent className="p-6">
              <form className="space-y-4" onSubmit={onSubmit}>
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-medium">
                    Nome
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Seu nome"
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="voce@empresa.com"
                    autoComplete="email"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
                    Mensagem
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Conte sobre a oportunidade ou ideia..."
                  />
                </div>
                <Button type="submit" disabled={status === "loading"}>
                  {status === "loading" ? "Enviando..." : "Enviar mensagem"}
                </Button>
                {message ? (
                  <p
                    className={`text-sm ${
                      status === "success" ? "text-emerald-400" : "text-red-400"
                    }`}
                    role="status"
                  >
                    {message}
                  </p>
                ) : null}
              </form>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}
