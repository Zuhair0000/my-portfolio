const SectionWrap = ({ id, title, text, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-4 md:px-8 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-4xl md:text-5xl font-bold  mb-6 ${className}`}>
            {title}
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {text}
          </p>
        </div>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
};

export default SectionWrap;
