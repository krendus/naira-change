/* Components */
import { Providers } from '@/lib/providers'
import './styles/globals.css'

export default function RootLayout(props: React.PropsWithChildren) {
  return (
    <Providers>
      <html lang="en">
        <meta name="description" content="Check the latest Naira exchange rates and currency conversion. Stay updated with accurate and real-time Nigerian Naira rates." />
        <meta name="keywords" content="Naira exchange rates, Nigerian Naira, currency conversion, forex rates, Naira to USD, Naira to Euro, Naira to GBP, Black Market Rates, Naira to Dollar, Naira Rate, Dollar to Naira, Dollar Rate Today" />
        <meta property="og:title" content="Naira Rates: Your Source for Official and Market Exchange Rates in Nigeria" />
        <meta property="og:description" content="Check the latest Naira exchange rates and currency conversion. Stay updated with accurate and real-time Nigerian Naira rates." />
        <meta property="og:image" content="https://i.postimg.cc/XqnPCPtc/NAir-A-2-1.png"/>
        <meta property="og:url" content="https://naira-change.vercel.app"/>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Naira Rates: Your Source for Official and Market Exchange Rates in Nigeria" />
        <meta name="twitter:description" content="Check the latest Naira exchange rates and currency conversion. Stay updated with accurate and real-time Nigerian Naira rates." />
        <meta name="twitter:image" content="https://i.postimg.cc/XqnPCPtc/NAir-A-2-1.png" />

        <body> 
          <main>{props.children}</main>
        </body>
      </html>
    </Providers>
  )
}
