import { ImageBox } from "@/components/image-box"
import { siteConfig } from "@/config/site"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-5 py-24 md:p-24 overflow-x-hidden">
      <div className="text-center mb-auto">
        <h1 className="scroll-m-20 mb-4 text-3xl md:text-4xl font-extrabold tracking-tight lg:text-5xl">
          <span className="gradient-text">{siteConfig.name}</span> - Plant
          Health Monitoring System
        </h1>
        <iframe src="https://thingspeak.com/apps/matlab_visualizations/534658"></iframe>
      </div>
    </main>
  )
}
