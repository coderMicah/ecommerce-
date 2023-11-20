import { Button } from "@/components/ui/button"
import { AlertTriangle, Frown } from "lucide-react"
import Link from "next/link"


function ErrorStripe() {
  return (
    <div className="h-full">
        <div className="mt-32 md:max-w-[50vw] mx-auto">
          <AlertTriangle className="text-red-600 h-16 w-16 mx-auto my-6"/>
          <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Oops!</h3>
            <p className="text-gray-600 my-2">Something Went Wrong</p>
            <p>Try Again Later</p>

            <Button asChild className="mt-5 ">
                <Link href="/">Go Back</Link>
            </Button>
          </div>
        </div>
    </div>
  )
}

export default ErrorStripe