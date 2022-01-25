import logo from './assets/logo.png';
import book from './assets/book.png';
import html from './assets/techstack/html.png';
import css from './assets/techstack/css.png';
import firefox from './assets/techstack/firefox.png';
import sublime from './assets/techstack/sublime.png';
import cmd from './assets/techstack/cmd.png';
import node from './assets/techstack/node.png';
import yarn from './assets/techstack/yarn.png';
import npm from './assets/techstack/npm.png';
import target1 from './assets/target/target1.png';
import target2 from './assets/target/target2.png';
import target3 from './assets/target/target3.png';
import writer from './assets/target/writer.jpg';
import writer1 from './assets/writer1.png';
import comment1 from './assets/testimony/1.png';
import comment2 from './assets/testimony/2.png';
import comment3 from './assets/testimony/3.png';
import cover from './assets/benefit/tailwind-cover.png';
import socmed from './assets/benefit/socmed-statistic.png';
import booksummary from './assets/tailwind-book.png';
import page1 from './assets/overview/1.png';
import page2 from './assets/overview/2.png';
import page3 from './assets/overview/3.png';
import page4 from './assets/overview/4.png';
import page5 from './assets/overview/5.png';
import page6 from './assets/overview/6.png';
import page7 from './assets/overview/7.png';
import page8 from './assets/overview/8.png';
import './App.scss';
import { FiArrowRightCircle } from 'react-icons/fi';
import { AiOutlineLine } from 'react-icons/ai';
import { FiDownload } from 'react-icons/fi';
import { IoIosCheckmarkCircle } from 'react-icons/io';
import { BsXCircleFill, BsFillCheckCircleFill } from 'react-icons/bs';

function App() {
  return (
    <div className='App'>
      <div className='navbar'>
        <div className='logo'>
          <img src={logo} alt='logo' />
        </div>
        <div className='navigation'>
          <ul>
            <a href='#'>
              <li>Top</li>
            </a>
            <a href='#'>
              <li>For Everyone</li>
            </a>
            <a href='#'>
              <li>Benefit</li>
            </a>
            <a href='#'>
              <li>Preview</li>
            </a>
            <a href='#'>
              <li>Penulis</li>
            </a>
          </ul>
        </div>
        <button>Download</button>
      </div>
      <div className='hero'>
        <div className='heroContent'>
          <h1>Sebuah framework CSS untuk developer yang memiliki phobia terhadap CSS</h1>
          <p>
            Buku ini akan mengajarkan kamu konsep utility-first pada CSS dan diakhiri dengan
            membangun sebuah website yang responsive dengan Tailwind CSS.
          </p>
          <div className='heroContext'>
            <button>
              Beli Sekarang <FiArrowRightCircle style={{ marginLeft: '1rem' }} />
            </button>
            <div className='downloads'>
              <FiDownload style={{ color: 'white' }} />
              <div className='download'>
                <p style={{ color: 'rgba(255, 255, 255, 0.4)', marginBottom: '0.5rem' }}>
                  {' '}
                  SUDAH TERJUAL
                </p>
                <p>501,234+</p>
              </div>
            </div>
          </div>
          <div className='techStack'>
            <p className='techText'>
              <AiOutlineLine /> TEKNOLOGI YANG DIGUNAKAN
            </p>
            <img src={html} alt='html' />
            <img src={css} alt='css' />
            <img src={firefox} alt='firefox' />
            <img src={sublime} alt='sublime' />
            <img src={cmd} alt='cmd' />
            <img src={node} alt='node' />
            <img src={yarn} alt='yarn' />
            <img src={npm} alt='npm' />
          </div>
        </div>
        <div className='book'>
          <img src={book} alt='' />
        </div>
      </div>
      <div className='target'>
        <div className='targetText'>
          <div style={{ width: '50%' }}>
            <p
              style={{ display: 'flex', alignItems: 'center', color: '#00BAC7', fontSize: '14px' }}
            >
              <AiOutlineLine /> BUKU INI UNTUK SIAPA
            </p>
            <h2 style={{ width: '50%' }}>
              Buku yang cocok dibaca untuk front-end dan back-end, bahkan UI designer!
            </h2>
          </div>
          <p>
            Buku ini bukan hanya untuk front-end developer yang ingin meningkatkan skill, buku ini
            juga cocok untuk back-end developer dan UI designer agar dapat menulis style tanpa harus
            menulis kode CSS dan tanpa mengandalkan front-end developer!
          </p>
        </div>
        <div className='targetImage'>
          <div className='imageContent'>
            <img src={target1} alt='target1' />
            <h5>Utility-First Framework</h5>
            <p>
              Tailwind hadir dengan konsep utility-first. Utility-first artinya banyak class-class
              kecil yang bisa digabung untuk menjadi sebuah UI.
            </p>
          </div>
          <div className='imageContent'>
            <img src={target2} alt='target2' />
            <h5>Tailwind JIT Engine</h5>
            <p>
              JIT engine akan men-generate utility-class yang kita gunakan saja. Ini akan membuat
              pengalaman pengembangan semakin baik.
            </p>
          </div>
          <div className='imageContent'>
            <img src={target3} alt='target3' style={{ height: '68%' }} />
            <h5>Unopinionated-Framework</h5>
            <p>
              Tailwind tidak memiliki pra-desain komponen apapun, ini membuat desain website yang
              kita buat menjadi unik.
            </p>
          </div>
        </div>
      </div>
      <div className='targetGreen'>
        <div className='writer'>
          <p style={{ display: 'flex', alignItems: 'center', color: 'white', fontSize: '14px' }}>
            <AiOutlineLine /> BUKU INI UNTUK SIAPA
          </p>
          <h2>Kata Pengantar Dari Penulis Buku</h2>
          <div className='writerData'>
            <div className='writerPhoto'>
              <img src={writer} alt='' />
            </div>
            <div className='writerName'>
              <h5>Muhamad Nauval Azhar</h5>
              <p>@mhdnauvalazhar</p>
            </div>
          </div>
        </div>
        <p style={{ width: '40%', lineHeight: '2.5rem', textAlign: 'justify' }}>
          "Tailwind sangat memungkinkan kamu untuk membangun sebuah desain website yang unik dan
          tanpa kamu perlu menulis kode CSS sedikitpun. Mungkin kamu akan berpikir bahwa kamu akan
          membutuhkan waktu yang lebih lama ketika membangun sebuah website dengan utility-first
          framework ketimbang dengan framework UIkit. Ya, benar. Karena kamu harus memikirkan desain
          dan mengimplementasikan desain tersebut dari awal sendiri. Namun, kamu perlu ingat
          manfaat-manfaat yang diberikan oleh utility-first framework, sehingga kamu dapat
          mempertimbangkannya. Dalam buku ini, kita akan mempelajari framework Tailwind CSS. Mulai
          dari konsep, workflow, hingga membuat sebuah website responsive dengan TailwindCSS. Buku
          ini tidak untuk semua orang, setidaknya kamu memahami cara mengoperasikan komputer,
          memahami HTML, memahami CSS, atau bisa dibilang kamu sudah pernah membangun website
          sebelumnya dan ingin mempelajari hal baru untuk meningkatkan skill."
        </p>
      </div>
      <div className='benefit'>
        <div className='bookBenefit'>
          <p style={{ display: 'flex', alignItems: 'center', color: '#00BAC7', fontSize: '14px' }}>
            <AiOutlineLine /> BUKU INI UNTUK SIAPA
          </p>
          <h5>Manfaat yang kamu dapatkan ketika membeli buku Tailwind CSS ini</h5>
          <p>
            "Buku itu seperti cermin: kalau yang berkaca padanya adalah seorang yang bodoh, engkau
            tak bisa berharap yang terpantul adalah seorang yang jenius." - J.K Rowling
          </p>
          <ul>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <IoIosCheckmarkCircle
                style={{ color: '#20D27D', fontSize: '30px', marginRight: '1rem' }}
              />
              Buku ini cocok untuk seorang yang ingin memperdalam front-end development agar tidak
              hanya sekadar Bootstrap
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <IoIosCheckmarkCircle
                style={{ color: '#20D27D', fontSize: '30px', marginRight: '1rem' }}
              />
              Buku ini ditulis berdasarkan dari dokumentasi Tailwind CSS langsung, agar
              meminimalisir terjadinya miskonsepsi
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <IoIosCheckmarkCircle
                style={{ color: '#20D27D', fontSize: '30px', marginRight: '1rem' }}
              />
              Sangat ramah untuk back-end developer yang phobia terhadap CSS dan mudah dipahami bagi
              UI designer
            </li>
            <li style={{ display: 'flex', alignItems: 'center' }}>
              <IoIosCheckmarkCircle
                style={{ color: '#20D27D', fontSize: '26px', marginRight: '1rem' }}
              />
              Studi kasus membangun sebuah website responsive dengan Tailwind CSS tanpa ngoding CSS
            </li>
          </ul>
        </div>
        <div className='bookSummary'>
          <img src={cover} alt='cover' />
          <div className='bookSum'>
            <div
              style={{ borderRight: '1px solid rgba(255, 255, 255, 0.3)', paddingRight: '1rem' }}
            >
              <h1>19</h1>
              <p>Jumlah Chapter</p>
            </div>
            <div
              style={{ borderRight: '1px solid rgba(255, 255, 255, 0.3)', paddingRight: '1rem' }}
            >
              <h1>253</h1>
              <p>Jumlah Halaman</p>
            </div>
            <div>
              <h1>60</h1>
              <p>Hari menulis</p>
            </div>
          </div>
        </div>
      </div>
      <div className='socmed'>
        <img src={socmed} alt='socmed' />
        <div className='socmedContent'>
          <p style={{ display: 'flex', alignItems: 'center', color: '#00BAC7', fontSize: '14px' }}>
            <AiOutlineLine /> SELAIN ITU
          </p>
          <h1>Buku dengan studi kasus nyata, juga komunitas yang ramah</h1>
          <p>
            Buku ini diakhiri dengan membangun website yang responsive dengan Tailwind. Selain itu
            kamu juga kamu dapat bergabung ke komunitas untuk bertanya ketika mengalami kesulitan.
          </p>
          <div className='socmedBox'>
            <svg
              width='30'
              height='31'
              viewBox='0 0 30 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              id='first'
            >
              <path
                d='M23.75 4.55249H6.25C4.86929 4.55249 3.75 5.67178 3.75 7.05249V24.5525C3.75 25.9332 4.86929 27.0525 6.25 27.0525H23.75C25.1307 27.0525 26.25 25.9332 26.25 24.5525V7.05249C26.25 5.67178 25.1307 4.55249 23.75 4.55249Z'
                stroke='#00BAC7'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M3.75 12.0525H26.25'
                stroke='#00BAC7'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
              <path
                d='M11.25 27.0525V12.0525'
                stroke='#00BAC7'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>

            <div className='socmedText'>
              <h5>Live Demo Project</h5>
              <p>Lihat live demo project yang akan kamu buat di akhir buku ini.</p>
            </div>
            <div>
              <svg
                width='40'
                height='41'
                viewBox='0 0 40 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                id='second'
              >
                <rect
                  y='0.80249'
                  width='40'
                  height='40'
                  rx='20'
                  fill='#00BAC7'
                  fill-opacity='0.1'
                />
                <path
                  d='M13 20.8025H27'
                  stroke='#00BAC7'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M20 13.8025L27 20.8025L20 27.8025'
                  stroke='#00BAC7'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
          <div className='socmedBox'>
            <svg
              width='30'
              height='31'
              viewBox='0 0 30 31'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M26.25 19.5525C26.25 20.2155 25.9866 20.8514 25.5178 21.3203C25.0489 21.7891 24.413 22.0525 23.75 22.0525H8.75L3.75 27.0525V7.05249C3.75 6.38945 4.01339 5.75356 4.48223 5.28472C4.95107 4.81588 5.58696 4.55249 6.25 4.55249H23.75C24.413 4.55249 25.0489 4.81588 25.5178 5.28472C25.9866 5.75356 26.25 6.38945 26.25 7.05249V19.5525Z'
                stroke='#00BAC7'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>

            <div className='socmedText'>
              <h5>Dukungan Komunitas</h5>
              <p>Sebuah server Discord berisi teman-teman yang akan membantu kamu.</p>
            </div>
            <div>
              <svg
                width='40'
                height='41'
                viewBox='0 0 40 41'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                vertical-align='center'
              >
                <rect
                  y='0.80249'
                  width='40'
                  height='40'
                  rx='20'
                  fill='#00BAC7'
                  fill-opacity='0.1'
                />
                <path
                  d='M13 20.8025H27'
                  stroke='#00BAC7'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M20 13.8025L27 20.8025L20 27.8025'
                  stroke='#00BAC7'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className='pratinjau'>
        <h5>PRATINJAU</h5>
        <h1>
          Sebelum membeli, kamu dapat melihat beberapa halaman pratinjau isi di dalam buku ini
        </h1>
        <p>
          Klik pada gambar halaman di sebelah kanan buku untuk melihat lebih detail halaman buku
          tersebut dan membaca isinya.
        </p>
      </div>
      <div className='overviewSection'>
        <div className='overview'>
          <img src={booksummary} alt='booksummary' />
          <div className='stackPage'>
            {/* <svg
              width='120'
              height='121'
              viewBox='0 0 120 121'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g filter='url(#filter0_d_2_260)'>
                <circle cx='60' cy='45.9753' r='30' fill='#00BAC7' />
                <path
                  d='M53 45.9753H67'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
                <path
                  d='M60 38.9753L67 45.9753L60 52.9753'
                  stroke='white'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </g>
              <defs>
                <filter
                  id='filter0_d_2_260'
                  x='0'
                  y='0.975342'
                  width='120'
                  height='120'
                  filterUnits='userSpaceOnUse'
                  color-interpolation-filters='sRGB'
                >
                  <feFlood flood-opacity='0' result='BackgroundImageFix' />
                  <feColorMatrix
                    in='SourceAlpha'
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                    result='hardAlpha'
                  />
                  <feOffset dy='15' />
                  <feGaussianBlur stdDeviation='15' />
                  <feComposite in2='hardAlpha' operator='out' />
                  <feColorMatrix
                    type='matrix'
                    values='0 0 0 0 0 0 0 0 0 0.729412 0 0 0 0 0.780392 0 0 0 0.45 0'
                  />
                  <feBlend
                    mode='normal'
                    in2='BackgroundImageFix'
                    result='effect1_dropShadow_2_260'
                  />
                  <feBlend
                    mode='normal'
                    in='SourceGraphic'
                    in2='effect1_dropShadow_2_260'
                    result='shape'
                  />
                </filter>
              </defs>
            </svg> */}

            <img src={page1} alt='page1' />
            <img src={page2} alt='page2' />
            <img src={page3} alt='page3' />
            <img src={page4} alt='page4' />
            <img src={page5} alt='page5' />
            <img src={page6} alt='page6' />
            <img src={page7} alt='page7' />
            <img src={page8} alt='page8' />
          </div>
        </div>
        <p>Halaman 1 dari 257</p>
      </div>

      <div className='price'>
        <div className='priceText'>
          <h5>HARGA BUKU</h5>
          <h1>Kamu dapat membeli buku fisik atau buku elektronik untuk dibaca di perangkat kamu</h1>
          <p>
            Dilarang memperjualbelikan atau memperbanyak tanpa seizin penulis. Hak cipta dilindungi
            undang-undang.
          </p>
        </div>
        <div className='whatYouGet'>
          <div className='priceBox'>
            <h5>Buku Digital</h5>
            <h1>Rp100.000</h1>
            <ul>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Buku lengkap
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Akses secara digital
              </li>
              <li>
                <BsXCircleFill style={{ color: '#F52E52', marginRight: '.5rem' }} />
                Buku fisik
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Mendapat pembaruan
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Konsultasi
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Dapat diunduh
              </li>
            </ul>
            <p>Beli Sekarang</p>
          </div>
          <div className='priceBox'>
            <h5>Buku Fisik</h5>
            <h1>Rp185.000</h1>
            <ul>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Buku lengkap
              </li>
              <li>
                <BsXCircleFill style={{ color: '#F52E52', marginRight: '.5rem' }} />
                Akses secara digital
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Buku fisik
              </li>
              <li>
                <BsXCircleFill style={{ color: '#F52E52', marginRight: '.5rem' }} />
                Mendapat pembaruan
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Konsultasi
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Dapat diunduh
              </li>
            </ul>
            <p>Beli Sekarang</p>
          </div>
          <div className='priceBox'>
            <h5>Buku Digital + Fisik</h5>
            <h1>Rp250.000</h1>
            <ul>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Buku lengkap
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Akses secara digital
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Buku fisik
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Mendapat pembaruan
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Konsultasi
              </li>
              <li>
                <BsFillCheckCircleFill style={{ color: '#20D27D', marginRight: '.5rem' }} />
                Dapat diunduh
              </li>
              <p>Beli Sekarang</p>
            </ul>
          </div>
        </div>
        <p>*Buku digital akan dikirimkan ke alamat email kamu</p>
        <p>*Buku fisik dikirim 7 hari setelah pemesanan</p>
      </div>

      <div className='writerGreeting'>
        <img src={writer1} alt='' />
        <div className='greeting'>
          <h5>PENULIS BUKU</h5>
          <h1>Tak kenal maka tak kenal. Berkenalan dengan penulis buku ini</h1>
          <p>
            “Halo, saya Nauval. Mungkin nama ini terdengar asing di telinga kamu. Namun, kedepannya
            saya berharap nama ini tidak lagi terdengar asing di telinga kamu sebagai orang yang
            rajin berbagi hal-hal baik untuk masyarakat, khususnya dalam ilmu komputer. Saya seorang
            web developer yang masuk kategori apa-aja-dikerjain-selagi-ada-manfaat-nya. Meski
            begitu, saya lebih senang fokus di front-end development, karena --menurut saya-- ini
            lebih sederhana saja. Di front-end development pada dasarnya hanya perlu menguasai tiga
            bahasa: HTML, CSS, dan JavaScript. Sudah jelas ini sederhana, yang bikin ribet itu kamu
            sendiri, sudah tau kamu cocoknya pake jQuery, malah maksa pake React.”
          </p>
        </div>
      </div>
      <div className='testimony'>
        <div className='testimonyIntro'>
          <div className='testi'>
            <p
              style={{ display: 'flex', alignItems: 'center', color: '#00BAC7', fontSize: '14px' }}
            >
              <AiOutlineLine /> TESTIMONIAL
            </p>
            <h1>Apa kata orang-orang yang membaca buku ini?</h1>
          </div>
          <p>
            Kalo seandainya kamu belum percaya dengan buku ini maka tidak apa-apa, karena yang patut
            kamu percayai adalah Tuhan. Tapi, mungkin beberapa ulasan ini bisa membangkitkan
            hasratmu untuk membeli buku ini.
          </p>
        </div>
        <div className='testiGroup'>
          <div className='testiBox'>
            <p>
              “Buku ini membantu banget buat kalian yang mau cobain tailwind, lengkap mulai dari
              instalasi sampai ke penggunaannya. Penjelasannya lengkap & enak dibaca kok :)”
            </p>
            <div className='commenterDetails'>
              <div className='commenter'>
                <img src={comment1} alt='comment1' />
              </div>
              <div className='commenterDetail'>
                <h5>Ahmad Saugi</h5>
                <p>Mahasiswa</p>
              </div>
            </div>
          </div>
          <div className='testiBox'>
            <p>
              “Terimakasih atas bukunya mas. Sangat membantu saya yang masih pemula dalam proses
              memahami taildwindcss. Isinya cukup lengkap dan detail.”
            </p>
            <div className='commenterDetails'>
              <div className='commenter'>
                <img src={comment2} alt='comment2' />
              </div>
              <div className='commenterDetail'>
                <h5>Dedik Sugiharto</h5>
                <p>Front-end Engineer</p>
              </div>
            </div>
          </div>
          <div className='testiBox'>
            <p>
              “Sebagai pemula yang tidak memiliki latar belakang pemrograman, buku ini sangat cocok
              untuk dijadikan referensi belajar. Penjelasannya ringkas tapi mudah dipahami.”
            </p>
            <div className='commenterDetails'>
              <div className='commenter'>
                <img src={comment3} alt='comment3' />
              </div>
              <div className='commenterDetail'>
                <h5>Lutfi Hanafiah Ramadhan</h5>
                <p>IT Support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='buyIt'>
        <h5>BELI BUKU</h5>
        <h1>Anda ingin segera memesan buku ini?</h1>
        <p>Otak Kita butuh asupan nutrisi juga, tidak hanya perut saja. </p>
        <div>
          <div className='sale'>
            <div className='saleDetail'>
              <h3>SUDAH TERJUAL</h3>
              <h2>501,234+</h2>
            </div>
            <button>
              Beli Sekarang <FiArrowRightCircle style={{ marginLeft: '1rem' }} />
            </button>
          </div>
        </div>
      </div>
      <div className='footer'></div>
    </div>
  );
}

export default App;
