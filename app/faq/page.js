import { Fragment } from 'react'
import Link from 'next/link'
import faqList from '@/data/faq-list'

export default function FAQ() {
    return (
        <>
            <header className="py-10 bg-neutral-100 text-center">
                <h1>常見問答</h1>
                <p>以下是一些常見的問題與解答...</p>

                <Link href="/" className="my-4 inline-block">返回首頁</Link>
            </header>

            <section className="bg-neutral-200 py-10">
                <div className="container mx-auto">
                    {
                        faqList.map(({ question, id, answer }) => {
                            // console.log({ question, id, answer })

                            return (
                                <div key={id} className="bg-white rounded-md mb-4 shadow-md">
                                    <h2 className='p-4'>{question}</h2>
                                    <p className='p-4 border-t border-neutral-300 text-neutral-400'>{answer}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    )
}
