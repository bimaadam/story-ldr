const Features = () => {
    return (
        <>
            <section className="bg-base-200 py-12">
                <div className="container mx-auto">
                    <h2 id="pertame" className="text-3xl font-bold text-center mb-8">Hal Spesial tentang Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card bg-base-100 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                            <div className="card-body">
                                <h3 className="text-xl font-bold">LDR Goals 🗺️</h3>
                                <p>Kami berhasil menjaga hubungan jarak jauh selama hampir 3 tahun, dari Ciamis ke Lombok! ❤️</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                            <div className="card-body">
                                <h3 className="text-xl font-bold">Pertemuan Spesial 🌟</h3>
                                <p>Pertama kali bertemu langsung pada 23-28 September 2024. Kenangan yang gak terlupakan!</p>
                            </div>
                        </div>
                        <div className="card bg-base-100 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                            <div className="card-body">
                                <h3 className="text-xl font-bold">Ririn & Bima Forever 💍</h3>
                                <p>Komitmen untuk terus bersama, mendukung mimpi masing-masing, dan saling menjaga.</p>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                <div className="card-body">
                    <h3 className="text-xl font-bold">Jalan-jalan ke Pantai Alang-Alang 🌊</h3>
                    <p>Kami menikmati momen indah di Pantai Alang-Alang, Senggigi. Pemandangan sunset yang memukau! ❤️</p>
                </div>
            </div>

            {/* Makan Bareng di KFC */}
            <div className="card bg-base-200 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                <div className="card-body">
                    <h3 className="text-xl font-bold">Makan Bareng di KFC 🍗</h3>
                    <p>Kami sering menikmati waktu santai dengan makan bersama di KFC favorit. Saling berbagi cerita sambil menikmati nugget! 😋</p>
                </div>
            </div>

            {/* Foto Bareng di Lombok Epicentrum Mall */}
            <div className="card bg-base-200 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                <div className="card-body">
                    <h3 className="text-xl font-bold">Foto Bareng di Lombok Epicentrum Mall 📸</h3>
                    <p>Momen seru saat kami berfoto bersama di Lombok Epicentrum Mall. Kenangan yang selalu kami hargai! 📷✨</p>
                </div>
                </div>
                    </div>
                </div>
            </section>
            <section className="bg-base-200 py-12">
                <div className="container mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-8">Kesamaan Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <div className="card bg-base-200 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                            <div className="card-body">
                                <h3 className="text-xl font-bold">Nonton Film 🎥</h3>
                                <p>Kami suka banget nonton drama Korea dan anime pas lagi santai.</p>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                            <div className="card-body">
                                <h3 className="text-xl font-bold">Musik 🎵</h3>
                                <p>Bima suka bikin musik di FL Studio, dan Ririn selalu jadi pendengar pertama!</p>
                            </div>
                        </div>
                        <div className="card bg-base-200 shadow-lg transition-transform transform hover:scale-105 hover:bg-accent hover:text-white hover:shadow-2xl hover:shadow-secondary">
                            <div className="card-body">
                                <h3 className="text-xl font-bold">Ngobrol Lama-lama 📞</h3>
                                <p>Kami sering ngobrol sampai lupa waktu, dari cerita receh sampai rencana masa depan.</p>
                            </div>
                        </div>
                        </div>
                    </div>
            </section>
        </>
    );
}

export default Features;