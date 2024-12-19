import Image from 'next/image';

const Gallery = () => {
  const photos = [
    { id: 1, src: '/images/photo1.jpg', alt: 'Ririn & Bima 1' },
    { id: 2, src: '/images/photo2.jpg', alt: 'Ririn & Bima 2' },
    { id: 3, src: '/images/photo3.jpg', alt: 'Ririn & Bima 3' },
    { id: 4, src: '/images/photo4.jpg', alt: 'Ririn & Bima 4' },
  ];

  return (
    <section className="bg-base-200 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Kenangan Ririn & Bima</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((photo) => (
            <div key={photo.id} className="card shadow-lg">
              <figure>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  className="rounded-lg"
                  width={300}
                  height={300}
                />
              </figure>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
