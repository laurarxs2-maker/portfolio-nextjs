import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="font-mono text-sm text-primary">404</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
        Página não encontrada
      </h1>
      <p className="mt-4 max-w-md text-muted-foreground">
        O caminho que você tentou acessar não existe ou foi movido.
      </p>
      <Button asChild className="mt-8">
        <Link href="/">Voltar para o início</Link>
      </Button>
    </div>
  )
}
