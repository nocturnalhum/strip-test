import Image from 'next/image';

export default function Home() {
  return (
    <main className='flex flex-col min-h-screen items-center justify-center'>
      <h1 className='text-5xl font-bold mb-5'>By Product</h1>
      <div className='flex gap-3'>
        <div className='w-56 h-56 bg-amber-400' />
        <div className='w-56 h-56 bg-rose-400' />
      </div>
    </main>
  );
}
