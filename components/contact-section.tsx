"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { useToast } from "@/components/ui/use-toast"
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saurabh5532u@gmail.com",
    href: "mailto:saurabh5532u@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "NaN",
    href: "NaN",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "GLA university,Mathura",
    href: "#",
  },
]

export function ContactSection() {
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.3)
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation(0.2)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")

  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("https://formsubmit.co/ajax/saurabh5532u@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          subject,
          message,
        }),
      })

      if (response.ok) {
        toast({ title: "Success", description: "Your message has been sent! If this is your first time, please check your email to activate." })
        setName("")
        setEmail("")
        setSubject("")
        setMessage("")
      } else {
        toast({ title: "Error", description: "Something went wrong. Please try again." })
      }
    } catch (error) {
      toast({ title: "Error", description: "Something went wrong. Please try again." })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-1000 ${titleVisible ? "animate-fade-in-up" : "opacity-0 translate-y-8"}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${formVisible ? "animate-fade-in-left" : "opacity-0 translate-x-8"}`}
            >
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, creative projects, or potential collaborations. Feel
                free to reach out through any of the channels below.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <ContactInfoItem key={info.label} info={info} index={index} isVisible={formVisible} />
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div
            ref={formRef}
            className={`transition-all duration-1000 ${formVisible ? "animate-fade-in-right" : "opacity-0 translate-x-8"}`}
          >
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-8">
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      placeholder="Project inquiry"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="transition-all duration-300 focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    size="lg"
                    disabled={isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4 mr-2" />
                    )}
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactInfoItem({
  info,
  index,
  isVisible,
}: { info: (typeof contactInfo)[0]; index: number; isVisible: boolean }) {
  const Icon = info.icon

  return (
    <div
      className={`flex items-center space-x-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300 ${isVisible ? "animate-fade-in-left" : "opacity-0 translate-x-8"
        }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="p-3 bg-primary/10 rounded-lg">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="font-medium">{info.label}</p>
        <a href={info.href} className="text-muted-foreground hover:text-primary transition-colors">
          {info.value}
        </a>
      </div>
    </div>
  )
}
