import FAQs from "@/components/faqs"
import HowItWorks from "@/components/how-it-works"
import Introduction from "@/components/intro"
import { Navbar } from "@/components/navbar"

export default function Landing() {
  return (
    <main>
      <Navbar />
      <Introduction />
      <HowItWorks />
      <FAQs />
    </main>
  )
}
