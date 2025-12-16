import { LoginForm } from "@/components/LoginForm";



export default function Login() {
  return (

     <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full flex flex-col gap-4 max-w-md">
        <LoginForm />
       
        </div>
     </div>
  );
}
