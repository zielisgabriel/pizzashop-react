import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { NavLink } from "react-router";

const signInFormSchema = z.object({
    email: z.string().email().min(8).transform(value => value.trim())
})

type SignInFormParams = z.infer<typeof signInFormSchema>

export function SignIn() {
    document.title = "Login | pizza.shop"

    const { register, handleSubmit, formState: { isSubmitting } } = useForm({
        resolver: zodResolver(signInFormSchema)
    })

    async function handleSignIn(data: SignInFormParams) {
        try {
            console.log(data)
        
            // throw new Error()

            await new Promise((resolve) => setTimeout(resolve, 2000))

            toast.success("Enviamos um link de autenticação para seu e-mail.", {
                action: {
                    label: "Reenviar",
                    onClick: () => handleSignIn,
                }
            })
        } catch (error) {
            toast.error("Credenciais inválidas.")
        }
    }

    return (
        <>
            <div className="p-8">
                <Button asChild variant={"ghost"} className="absolute right-8 top-8">
                    <NavLink to={"/sign-up"} title="Novo estabelecimento">
                        Novo estabelecimento
                    </NavLink>
                </Button>

                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
                        <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro!</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
                        <div className="space-y-2 flex flex-col gap-0.5">
                            <Label htmlFor="email" className="font-semibold text-sm">Seu e-mail</Label>
                            <Input type="email" id="email" placeholder="Digite seu email" { ...register("email") } />
                        </div>
                        <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                            {!isSubmitting ? "Acessar painel" : "Carregando..."}
                        </Button>
                    </form>
                </div>
            </div>
        </>
    );
}