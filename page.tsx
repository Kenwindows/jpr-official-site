"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      if (heroRef.current) {
        heroRef.current.style.backgroundPositionY = `${scrollY * 0.5}px`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.pageYOffset
      window.scrollTo({
        top: offsetTop - 100, // 100pxのオフセットを追加して、ナビゲーションバーの下に表示
        behavior: "smooth",
      })
    }
  }

  return (
    <main className="min-h-screen">
      {/* ナビゲーション */}
      <nav className="bg-white py-4 px-6 shadow-sm fixed w-full z-50">
        <div className="container mx-auto flex justify-between items-center">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/" className="text-blue-600 font-bold text-xl">
              JPプロダクトリテイリング
            </Link>
          </motion.div>
          <motion.ul className="flex space-x-6" initial="hidden" animate="visible" variants={staggerChildren}>
            {[
              { name: "事業内容", id: "business" },
              { name: "サービス", id: "service" },
              { name: "リスク対策", id: "risk" },
              { name: "お問い合わせ", id: "contact" },
            ].map((item, index) => (
              <motion.li key={index} variants={fadeIn}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 transition-colors duration-300"
                >
                  {item.name}
                </button>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </nav>

      {/* ヒーローセクション */}
      <div
        ref={heroRef}
        className="pt-24 pb-16 bg-gradient-to-br from-teal-700 to-blue-900 text-white relative overflow-hidden"
        style={{ backgroundSize: "cover" }}
      >
        <div className="absolute inset-0 bg-blue-900 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/cerulean-flow.png')",
              backgroundSize: "cover",
              mixBlendMode: "overlay",
            }}
          ></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              無料で世界へ。
              <br />
              あなたの商品を、リスクゼロで海外展開
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              中小企業・個人事業主様の海外進出を、完全無料でサポートいたします。170以上の国と地域へ、50,000品目以上の商品を展開中。
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="#contact"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contact")
                }}
                className="inline-block bg-white text-blue-800 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-50 transition-all duration-300"
              >
                無料相談はこちら
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 w-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </div>

      {/* 事業内容セクション */}
      <section id="business" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            事業内容
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700 mb-6">
              弊社の主な事業は、お客様の商品の輸出販売代理と、自社商品の輸出販売でございます。
            </p>

            <motion.div
              className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-4">完全無料の輸出代行サービス</h3>
              <p className="text-gray-700">
                お客様の商品の販売代理につきましては、お客様に一切のご料金をご負担いただくことなく、無償で行っております。法人、個人事業主を問わず、無償で輸出代理を行い、海外の販路拡大のお手伝いをさせていただいております。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* サービスセクション */}
      <section id="service" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            無償サービスの仕組み
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-gray-700">
              無償でこのようなサービスを提供している理由につきましては、お客様からお金をいただくのではなく、海外の購入者様から手数料をいただいているためでございます。お客様にご負担いただく発生するコスト、リスク、トラブルは一切ございません。その全てを弊社が負担させていただきます。
            </p>
          </motion.div>
        </div>
      </section>

      {/* リスク対策セクション */}
      <section id="risk" className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            リスク対策
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-4">安心のリスク対策</h3>
              <p className="text-gray-700">
                海外取引に伴うリスクは弊社が全て負担いたします。為替変動リスク、輸送中の破損リスク、支払い遅延リスクなど、あらゆるリスクから販売者様を守ります。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* お問い合わせセクション */}
      <section id="contact" className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            お問い合わせ
          </motion.h2>

          <motion.div
            className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <p className="text-lg mb-6">無料相談・お問い合わせはこちらから承っております。お気軽にご連絡ください。</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <a
                  href="mailto:contact@jpproductretail.com"
                  className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300"
                >
                  お問い合わせはこちら
                </a>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <p>© 2024 JPプロダクトリテイリング. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
