import DotField from '@/components/DotField';
import LogoLoop from '@/components/LogoLoop';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ScrollReveal from '@/components/ScrollReveal';
import SplitText from '@/components/SplitText';
import { SiReact, SiTypescript, SiTailwindcss } from 'react-icons/si';
import { Badge } from "@/components/ui/badge"
import { FaExternalLinkAlt, FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import BorderGlow from '@/components/BorderGlow';
import GlassIcons from '@/components/GlassIcons';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Timeline } from 'antd';

function App() {
  const techLogos = [
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  ];

  const items = [
    { icon: <FaGithub />, color: 'purple', label: 'Github', href: 'https://github.com/ag-ahmadghani' },
    { icon: <FaLinkedin />, color: 'blue', label: 'Linkedin', href: 'https://www.linkedin.com/in/ahmad-ghani-900440354/' },
    { icon: <FaWhatsapp />, color: 'green', label: 'Whatsapp', href: 'https://www.me/6285774722326' },
  ];
  

  return (
  <>
  <Navbar />
  <div className='max-w-screen min-h-screen h-full bg-black pb-100'>
   <div id="home" style={{ minHeight: '100vh', width: '100%', height: '600px', position: 'relative' }}>
      <DotField
        dotRadius={2}
        dotSpacing={12}
        bulgeStrength={67}
        glowRadius={70}
        sparkle={false}
        waveAmplitude={0}
        cursorRadius={300}
        cursorForce={0.15}
        bulgeOnly
        gradientFrom="#1677ff"
        gradientTo="#90e0ef"
        glowColor="#120F17"
    />
    <div className="pointer-events-none absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-4 text-center">
      <SplitText
        text="Welcome to Ghani's portfolio"
        tag="h1"
        className="text-3xl font-bold text-white sm:text-4xl md:text-5xl"
        splitType="chars"
        animateOnMount
      />
      <SplitText
        text="Click next if you want to know more"
        tag="p"
        className="max-w-md text-sm text-gray-300 sm:text-base"
        delay={40}
        splitType="words"
        animateOnMount
      />
      <Button
        className="pointer-events-auto mt-2 bg-[#1677ff] px-8 text-white hover:bg-[#1677ff]/80"
        onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Next
      </Button>
    </div>
    </div> 
    <div style={{ padding:'50px 0', height: '200px', position: 'relative', overflow: 'hidden'}}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
        className='text-[#ffff]'
      />
    </div>
    <div className='flex flex-col items-center gap-50'>
      <section id="about" className='flex flex-col items-center gap-20 scroll-mt-20'>
        <ScrollReveal>
        <div>
          <h1 className='text-4xl font-bold text-[#1677ff] text-center'>About Me</h1>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
        <div className='flex flex-col lg:flex-row justify-between items-center w-full max-w-[750px] px-4 h-full gap-10'>
          <div className='max-w-[300px] h-[300px] flex flex-col justify-between'>
            <p className='text-white text-justify'>Saya adalah mahasiswa aktif Program Studi Informatika yang sedang mencari kesempatan karir pada bagian
pengembangan web dan aplikasi mobile. Selama di Universitas saya terbiasa menggunakan HTML, CSS,
JavaScript, serta framework seperti Laravel, NextJS, ExpressJS serta Flutter. Aktif dalam organisasi kampus
dan beberapa proyek kolaboratif yang melatih kemampuan kepemimpinan dan manajemen waktu. Saya
memiliki semangat belajar tinggi dan selalu berusaha berkembang di dunia teknologi yang dinamis.</p>
            <div style={{position: 'relative' }}>
              <GlassIcons items={items} className="custom-class text-white text-xs"/>
            </div>
          </div>

          <div className='relative mt-75 md:mt-40 w-[300px] h-[300px] bg-[#1677ff] rounded-r-full overflow-visible z-10 lg:mt-0'>
            <img src="/no_bg_gani.png" alt="profile" className='w-[350px] h-[350px] absolute object-cover bg-center -top-12 rounded-r-[45%]'/>
          </div>
        </div>
        </ScrollReveal>


      </section>
      <section id="experience" className='flex pt-30 flex-col lg:flex-row justify-between w-full max-w-[750px] px-4 h-full items-center gap-8 scroll-mt-20'>
        <ScrollReveal>
        <div className=''>
          <h1 className='text-4xl font-bold text-[#1677ff]'>Experience</h1>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={100}>
        <div className='text-white max-w-[370px] w-full'>
          <Timeline
            styles={{
              itemContent: {
                color: 'white'
              },
              itemRail: {
                backgroundColor: 'grey'
              }
            }}
            items={[
              {
                content: <div>
                  <p>Februari 2026 - Sekarang</p>
                  <h1 className='text-2xl font-bold'>PT. Digital Aman Sentosa - Application Developer</h1>
                  <p className='text-gray-300'>Mengelola siklus pengembangan aplikasi full-stack. Merancang arsitektur, tampilan serta kinerja .</p>
                </div>,

              },
              {
                content: <div>
                  <p>Agustus 2024 - Sekarang</p>
                  <h1 className='text-2xl font-bold'>Asisten Laboratorium Universitas Nasional - Koordinator</h1>
                  <p className='text-gray-300'>Memainkan peran penting dalam memastikan kelancaran teknis, administratif, dan instruksional untuk
                  mendukung kelangsungan kegiatan praktikum secara optimal.</p>
                </div>,
              },
            ]}
          />
        </div>
        </ScrollReveal>
      </section>
      <section id="education" className='flex pt-35 pb-35 flex-col lg:flex-row justify-between w-full max-w-[750px] px-4 h-full items-center gap-8 scroll-mt-20'>
        <ScrollReveal delay={100}>
          <div className='order-1 lg:order-2'>
            <h1 className='text-4xl font-bold text-[#1677ff]'>Education</h1>
          </div>
        </ScrollReveal>
        <ScrollReveal>
        <div className='text-white max-w-[370px] w-full order-2 lg:order-1'>
          <Timeline
            styles={{
              itemContent: {
                color: 'white'
              },
              itemRail: {
                backgroundColor: 'grey'
              }
            }}
            items={[
              {
                content: <div>
                  <p>2023 - Sekarang</p>
                  <h1 className='text-2xl font-bold'>Universitas Nasional</h1>
                  <p className='text-gray-300'>Fakultas Teknologi Komunikasi dan Informatika - Informatika</p>
                </div>,

              },
              {
                content: <div>
                  <p>2015 - 2018</p>
                  <h1 className='text-2xl font-bold'>SMK Negeri 10 Jakarta</h1>
                  <p className='text-gray-300'>Rekayasa Perangkat Lunak</p>
                </div>,
              },
            ]}
          />
        </div>
        </ScrollReveal>
      </section>
      <section id="projects" className='flex flex-col items-center gap-20 scroll-mt-20'>
        <ScrollReveal>
        <div>
          <h1 className='text-4xl font-bold text-[#1677ff]'>Projects</h1>
        </div>
        </ScrollReveal>
        <ScrollReveal delay={100} className="w-full">
        <div className='flex flex-col md:flex-row md:flex-wrap justify-center items-center w-full max-w-6xl px-4 gap-10'>
          <div>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <Card className="w-[350px] bg-[#121212]">
                <CardHeader>
                  <CardTitle className='text-white'>
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-2xl font-bold'>Magal</h1>
                      <div className='flex gap-1 flex-wrap'>
                        <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>Go</Badge>
                        <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>Vue JS</Badge>
                        <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>PostgreSQL</Badge>
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className='flex flex-col gap-2 mt-5'>
                    <p className='text-gray-300'>Kontribusi pengerjaan frontend website mengguakan go, vue js dan postgresql untuk aplikasi management sistem yang terhubung untuk POS, pada website ini diperuntukan admin dari
                    head office mengelola restaurant</p>
                  </CardDescription>
                </CardHeader>
                <CardFooter className='bg-[#121212] border-none'>
                  {/* <a href="#">
                    <FaExternalLinkAlt className='text-[#1677ff]' />
                  </a> */}
                </CardFooter>
              </Card>
            </BorderGlow>
          </div>
          <div>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <Card className="w-[350px] bg-[#121212]">
                <CardHeader>
                  <CardTitle className='text-white'>
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-2xl font-bold'>WebGIS</h1>
                      <div className='flex gap-1 flex-wrap'>
                        <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>NextJS</Badge>
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className='flex flex-col gap-2 mt-5'>
                    <p className='text-gray-300'>Kontribusi pengerjaan frontend website mengguakan nextjs untuk aplikasi webgis yang terhubung untuk mengelola data geospasial</p>
                  </CardDescription>
                </CardHeader>
                <CardFooter className='bg-[#121212] border-none'>
                  {/* <a href="#">
                    <FaExternalLinkAlt className='text-[#1677ff]' />
                  </a> */}
                </CardFooter>
              </Card>
            </BorderGlow>
          </div>
          <div>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <Card className="w-[350px] bg-[#121212]">
                <CardHeader>
                  <CardTitle className='text-white'>
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-2xl font-bold'>Kontrakanku</h1>
                      <div className='flex gap-1 flex-wrap'>
                        <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>Laravel</Badge>
                        <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>MySQL</Badge>
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className='flex flex-col gap-2 mt-5'>
                    <p className='text-gray-300'>Aplikasi berbasis web yang dikembangkan menggunakan Laravel sebagai platform LMS (Listing
                      Management System) sederhana.</p>
                  </CardDescription>
                </CardHeader>
                <CardFooter className='bg-[#121212] border-none'>
                  <a href="https://github.com/ag-ahmadghani/kontrakanku">
                    <FaExternalLinkAlt className='text-[#1677ff]' />
                  </a>
                </CardFooter>
              </Card>
            </BorderGlow>
          </div>
          <div>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
            <Card className="w-[350px] bg-[#121212]">
              <CardHeader>
                <CardTitle className='text-white'>
                  <div className='flex flex-col gap-2'>
                    <h1 className='text-2xl font-bold'>Hellaw</h1>
                    <div className='flex gap-1 flex-wrap'>
                      <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>NextJS</Badge>
                      <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>ExpressJS</Badge>
                    </div>
                  </div>
                </CardTitle>
                <CardDescription className='flex flex-col gap-2 mt-5'>
                  <p className='text-gray-300'>Aplikasi berbasis web yang dikembangkan menggunakan NextJS dan ExpressJs untuk band profile
                  bernama hellaw.</p>
                </CardDescription>
              </CardHeader>
              <CardFooter className='bg-[#121212] border-none'>
                <a href="https://github.com/ag-ahmadghani/web-hellaw">
                  <FaExternalLinkAlt className='text-[#1677ff]' />
                </a>
              </CardFooter>
            </Card>
            </BorderGlow>
          </div>
          <div>
            <BorderGlow
              edgeSensitivity={30}
              glowColor="40 80 80"
              backgroundColor="#120F17"
              borderRadius={16}
              glowRadius={40}
              glowIntensity={1}
              coneSpread={25}
              animated={false}
              colors={['#c084fc', '#f472b6', '#38bdf8']}
            >
              <Card className="w-[350px] bg-[#121212]">
                <CardHeader>
                  <CardTitle className='text-white'>
                    <div className='flex flex-col gap-2'>
                      <h1 className='text-2xl font-bold'>LivinHome</h1>
                      <div className='flex gap-1 flex-wrap'>
                        <Badge variant="outline" className='text-[#1677ff] border-[#1677ff] bg-[#121212]'>NextJS</Badge>
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className='flex flex-col gap-2 mt-5'>
                    <p className='text-gray-300'>Kontribusi pengerjaan frontend website mengguakan nextjs dimana untuk company profile property
                    seperti kosan, kontrakan.</p>
                  </CardDescription>
                </CardHeader>
                <CardFooter className='bg-[#121212] border-none'>
                  {/* <a href="#">
                    <FaExternalLinkAlt className='text-[#1677ff]' />
                  </a> */}
                </CardFooter>
              </Card>
            </BorderGlow>
          </div>
        </div>
        </ScrollReveal>
      </section>
    </div>

  </div>
  <Footer />
  </>
  );
}

export default App;