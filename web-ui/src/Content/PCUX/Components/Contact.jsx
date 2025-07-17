export function Contact() {

  return (
    <div className='text-left flex flex-col gap-2 w-[235px]'>
        <p>Email me at: <a href="mailto:moises.muniz.mangas@gmail.com">moises.muniz.mangas@gmail.com</a></p>
        <p>Or find me on social media:</p>
        <div className='flex flex-row h-5 place-content-center gap-4 overflow-hidden'>
            <a className='contents' target="_blank" href='https://www.linkedin.com/in/moisés-muñiz-mangas-a2a8a615a/'><img lassName='object-contain pixelated'  src='icons/linkedin.webp' /></a>
            <a className='contents' target="_blank" href='https://github.com/moemmia'><img lassName='object-contain pixelated'  src='icons/github.webp' /></a>
            <a className='contents' target="_blank" href='https://bsky.app/profile/moemmia.bsky.social'><img lassName='object-contain pixelated'  src='icons/bluesky.webp'/></a>
            <a className='contents' target="_blank" href='https://twitter.com/moemmia'><img lassName='object-contain pixelated'  src='icons/twitter.webp'/></a>
            <a className='contents' target="_blank" href='https://moemm.itch.io'><img lassName='object-contain pixelated'  src='icons/itchio.webp' /></a>
        </div>
    </div>
  );
}
