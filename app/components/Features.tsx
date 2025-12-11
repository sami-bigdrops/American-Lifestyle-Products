import { Shield, Truck, DollarSign, Headphones } from 'lucide-react';

export function Features() {
    const features = [
      {
        icon: Shield,
        title: 'Quality Assured',
        description: 'Every product is carefully selected and tested to meet our high standards of quality and durability.',
      },
      {
        icon: Truck,
        title: 'Fast Shipping',
        description: 'Quick and reliable delivery to get your products to your doorstep in no time.',
      },
      {
        icon: DollarSign,
        title: 'Best Value',
        description: 'Competitive prices with exceptional quality that offers the best value for your money.',
      },
      {
        icon: Headphones,
        title: '24/7 Support',
        description: 'Round-the-clock customer support to assist you with any questions or concerns.',
      },
    ];
  
    return (
      <section className="bg-(--color-white) w-full">
        <div className="mx-auto max-w-[1440px] px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 lg:px-16 lg:py-24 xl:px-20 xl:py-[80px]">
          <div className="mb-12 flex flex-col items-center gap-4 text-center sm:mb-16 md:mb-20 lg:mb-24">
            <h2 className="font-title text-[32px] font-extrabold text-(--color-dark-blue) sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[50px]">
              Why Choose Us
            </h2>
            <p className="font-body text-[16px] font-light text-(--color-black-grey) sm:text-[17px] md:text-[18px] lg:text-[20px]">
              Quality. Convenience. Products You Can Trust.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6 xl:gap-8 items-center justify-center">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-(--color-blue) bg-opacity-10">
                    <IconComponent className="h-8 w-8 text-(--color-white)" />
                  </div>
                  <h3 className="font-title text-[20px] font-bold text-(--color-dark-blue) sm:text-[22px] md:text-[24px]">
                    {feature.title}
                  </h3>
                  <p className="font-body text-[14px] font-normal leading-[22px] text-(--color-black-grey) sm:text-[15px] sm:leading-[24px] md:text-[16px]">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }

