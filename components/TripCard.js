// 一個React元件會有的特徵

// 1. 必須要是一個function(函式)
// 2. 必須要回傳一個長得像HTML的東西 (JSX)

// 輸出元件讓其他的檔案可以引用
export default function TripCard({ trip: { image, name, price, discountPrice, isDiscounted } }) {
    // 回傳一個旅程卡片的元件內容
    return (
        <div className="rounded-xl shadow-lg shadow-neutral-900/20 overflow-hidden">
            <img className="w-full" src={image} alt={name} />
            <div className="p-3">
                <h2>{name}</h2>
                <p>$
                    {
                        isDiscounted ?
                            <>
                                <span className="text-orange-500 font-bold mx-1">{discountPrice}</span>
                                <span className="line-through opacity-50 mr-1">{price}</span>
                            </>
                            :
                            <span> {price}</span>}

                    NT</p>
            </div>
        </div>
    )
}