import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Lightbulb, Heart, Building2, Laptop, Users, Wallet } from "lucide-react";
import { motion } from "framer-motion";

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-16 space-y-24">
      {/* Top Cards Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { 
            icon: Target, 
            title: "VISION", 
            description: "To be the leading independent logistics company, offering value-added total cargo solutions for corporates, SMEs & developing market sectors, growing our market share in Kenya and East Africa."
          },
          { 
            icon: Lightbulb, 
            title: "MISSION", 
            description: "To be recognized as a responsible organization, providing precise, prompt, and affordable services, keeping in tune with market needs and utilizing the latest technology to exceed client expectations."
          },
          { 
            icon: Heart, 
            title: "CORE VALUES", 
            description: "Reliability, Integrity, Efficiency, Innovation & Professionalism." 
          }
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <Card className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="p-3 bg-green-100 rounded-full mb-4">
                  <item.icon className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-green-500 mb-3">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Why Choose Us Section */}
      <section className="space-y-12">
        <h2 className="text-4xl font-bold text-center text-green-500">Why Choose Us</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {[
              { icon: Building2, title: "Extensive Global Network", description: "Members of KGCHA with networks in over 160 countries globally Our extensive network in East Africa enables us to reach key markets and connect businesses with suppliers, retailers, and customers efficiently." },
              { icon: Laptop, title: "Strong Relationships", description: "With over 25 years of experience in the logistics industry, we have honed our expertise, developed strong relationships, and gained in-depth knowledge of the East African market. Engaged with various authorizing bodies for seamless operations." },
              { icon: Users, title: "Authorized Economic Operator", description: "Our sister company, UNION GREEN LOGISTICS LTD, handles all customs brokerage. We prioritize open communication and provide regular updates throughout the distribution journey, keeping you informed at every step." },
              { icon: Wallet, title: "End To End Support", description: "From initial planning and documentation to storage and warehousing, our comprehensive services cover every aspect of the distribution process, providing you with peace of mind." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
                className="flex items-start space-x-4 group hover:bg-green-50 p-4 rounded-lg transition-colors duration-300"
              >
                <div className="p-2 bg-green-100 rounded-full shrink-0 group-hover:bg-green-200 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-green-500" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 text-green-500">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image Gallery */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >
              <img src="/3.jpg" className="w-full h-64 object-cover rounded-lg shadow-md" alt="Logistics operations" />
              <img src="/1.jpg" className="w-full h-64 object-cover rounded-lg shadow-md" alt="Global shipping" />
              <img src="/2.jpg" className="w-full h-64 object-cover rounded-lg shadow-md" alt="Warehouse management" />
              <div className="w-full h-64 bg-green-500 rounded-lg shadow-md flex items-center justify-center">
                <p className="text-white text-2xl font-bold text-center px-4">Your Trusted Logistics Partner</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Media Links Section */}
      <section className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-green-500">Connect With Us</h2>
        <p className="text-gray-600">Stay updated with our latest news and offers</p>
        <div className="flex justify-center space-x-6">
          {[
            { href: "#", label: "Facebook", iconPath: "M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" },
            { href: "#", label: "Instagram", iconPath: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" },
            { href: "#", label: "Twitter", iconPath: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" }
          ].map((social, idx) => (
            <motion.a
              key={idx}
              href={social.href}
              className="text-gray-400 hover:text-green-500 transition-colors duration-300"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <span className="sr-only">{social.label}</span>
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d={social.iconPath} />
              </svg>
            </motion.a>
          ))}
        </div>
      </section>
    </div>
  );
}