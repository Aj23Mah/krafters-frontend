import imgUrl from '../../assets/images/img9.png'

// Define a type for your component's props
type CommonSectionProps = {
    title: string;
  };

const CommonSection: React.FC<CommonSectionProps> = ({ title }) => {
  return (
    <section 
    style={{ backgroundImage: `url('${imgUrl}')`, height: '500px' }}
    className="bg-center bg-cover flex justify-center items-center py-20 md:py-7 mt-20">
      <div className="text-center">
        <h1 className="md:text-5xl text-xl font-bold">{title}</h1>
      </div>
    </section>
  );
};

export default CommonSection;
