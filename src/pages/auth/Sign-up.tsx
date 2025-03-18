import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { NavLink, useNavigate } from "react-router";
import { isMobilePhone } from "validator";

const signUpFormSchema = z.object({
    restaurantName: z.string().max(20).transform(value => value.trim()),
    ownerName: z.string().transform(value => value.trim()),
    email: z.string().email().min(8).transform(value => value.trim()),
    phone: z.string().refine(isMobilePhone),
})

type SignUpFormParams = z.infer<typeof signUpFormSchema>

export function SignUp() {
    document.title = "Cadastro | pizza.shop"

    const navigate = useNavigate()

    const { register, handleSubmit, formState: { isSubmitting } } = useForm({
        resolver: zodResolver(signUpFormSchema)
    })

    async function handleSignUp(data: SignUpFormParams) {
        console.log(data)

        try {
            console.log(data)
        
            // throw new Error()

            await new Promise((resolve) => setTimeout(resolve, 2000))

            toast.success("Cadastro efetuado com sucesso!")

            navigate("/sign-in")
        } catch (error) {
            toast.error("Erro ao cadastrar o restaurante.")
        }
    }

    return (
        <>
            <div className="p-8">
                <Button asChild variant={"ghost"} className="absolute right-8 top-8">
                    <NavLink to={"/sign-in"} title="Fazer Login">
                        Fazer login
                    </NavLink>
                </Button>

                <div className="w-[350px] flex flex-col justify-center gap-6">
                    <div className="flex flex-col gap-2 text-center">
                        <h1 className="text-2xl font-semibold tracking-tight">Cadastrar restaurante</h1>
                        <p className="text-sm text-muted-foreground">Cadastre seu restaurante e faça parte do nosso time!</p>
                    </div>

                    <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
                        <div className="space-y-2 flex flex-col gap-0.5">
                            <Label htmlFor="restaurantName" className="font-semibold text-sm">Nome do restaurante</Label>
                            <Input type="text" id="restaurantName" placeholder="Digite o nome do restaurante" { ...register("restaurantName") } />
                        </div>

                        <div className="space-y-2 flex flex-col gap-0.5">
                            <Label htmlFor="ownerName" className="font-semibold text-sm">Proprietário</Label>
                            <Input type="text" id="ownerName" placeholder="Digite o nome do proprietário" { ...register("ownerName") } />
                        </div>
                        
                        <div className="space-y-2 flex flex-col gap-0.5">
                            <Label htmlFor="email" className="font-semibold text-sm">Seu e-mail</Label>
                            <Input type="email" id="email" placeholder="Digite seu email" { ...register("email") } />
                        </div>
                        
                        <div className="space-y-2 flex flex-col gap-0.5">
                            <Label htmlFor="email" className="font-semibold text-sm">Telefone</Label>
                            <Input type="text" id="phone" placeholder="Digite o telefone do restaurante" { ...register("phone") } />
                        </div>

                        <Button type="submit" disabled={isSubmitting} className="w-full cursor-pointer">
                            {!isSubmitting ? "Acessar painel" : "Carregando..."}
                        </Button>

                        <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
                            Ao continuar, você irá concordar com os nossos <a href="" className="underline underline-offset-4">Termos de serviço</a> e <a href="" className="underline underline-offset-4">Políticas de privacidade</a>
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}