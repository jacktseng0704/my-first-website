import Link from 'next/link'

// Javascript 的命名慣例：
// 大駝峰命名法：TripList -> 元件(component) 或 類別(class)
// 小駝峰命名法：tripList -> 資料(data) 或 一般非元件的函式(function)

// 寫註解可使用快捷鍵: ctrl + / (cmd + /)
import TripCard from "@/components/TripCard";
import tripList from '@/data/trip-list'

export default function Home() {

  // 陣列.map() -> 透過map迴圈函式，能夠將陣列內的資料逐一取出做加工
  // 傳統函式寫法 function() {}
  // trip叫做迭代子(代名詞)
  // tripList.map(function(trip){
  //    console.log("一個行程", trip) 
  // })

  // 箭頭函式寫法，並且回傳一個新的陣列
  // 箭頭函式 () => {}
  // cards 代表迴圈回傳的n張 TripCard
  const cards = tripList.map((trip) => {
    // 迴圈內會重複執行的邏輯
    console.log("一個行程", trip)
    return <TripCard key={trip.id} trip={trip} />
  })


  return (
    <>
      <header className="bg-neutral-100 py-10 text-center">
        <div className="container mx-auto">
          <h1 className="important-title">HTML &amp; CSS</h1>
          <p>關於HTML標籤的更多資訊可參考 <a href="https://www.w3schools.com/html/" target="_blank">W3Schools HTML</a></p>

          <Link href="/about" className="my-4 inline-block">關於本站</Link>
          <Link href="/faq" className="my-4 ml-4 inline-block">常見問答</Link>
        </div>
      </header>
      <section id="tripListSection" className="my-4">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 px-10 sm:px-0">
          {/* TODO: 請在此處放入一系列的產品卡片 */}

          {cards}

        </div>
      </section>
      <section id="htmlTagsSection" className="my-4">
        <div className="container mx-auto">
          <h1>HTML標籤</h1>
          <p>用以表達你想在網頁上放入的各種內容</p>
          {/* TODO: 請嘗試在此處放入HTML標籤 */}
          {/* 標題字 h1~h6 */}
          <h1>標題字</h1>
          <h1>heading</h1>
          <h2>次標題</h2>
          <h2>subheading</h2>
          <h3>小標題</h3>
          <h3>small heading</h3>
          <img src="/images/image1.jpg" alt="海岸" />
          <img src="/images/image2.jpg" alt="林中小徑" />
          {/* <img src="/images/image3.jpg" alt="森林" /> */}
          {/* <img src="/images/image4.jpg" alt="雪山" /> */}

          <a href="https://www.google.com" target="_blank">Google</a>
        </div>
      </section>
      <footer className="">
        <div className="container mx-auto">
          <p>
            CopyRight &copy; 2024
          </p>
        </div>
      </footer>
    </>
  );
}
