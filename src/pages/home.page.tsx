import premiereLeagueLogo from '@assets/premiere-league-logo.svg'

import {PageHeader} from '@ui-kit/page-header'

export function HomePage() {
  return (
    <>
      <PageHeader title="Premier League 2021/2022" />
      <article className="prose">
        <img src={premiereLeagueLogo} alt="Premiere League logo" />
        <p>
          The 2021–22 Premier League was the 30th season of the Premier League,
          the top English professional league for association football clubs
          since its establishment in 1992, and the 123rd season of top-flight
          English football overall.
        </p>
      </article>
    </>
  )
}
