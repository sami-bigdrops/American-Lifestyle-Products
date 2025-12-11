'use client';

import { Home, Sparkles, FolderTree, Heart, Package, ShoppingBag } from 'lucide-react';

export function Services() {
    const productCategories = [
        {
            icon: Home,
            title: 'Home & Kitchen',
            description: 'Quality cookware, kitchen tools, and home essentials that make daily living easier and more enjoyable.',
        },
        {
            icon: Sparkles,
            title: 'Personal Care',
            description: 'Gentle skincare, grooming tools, and hygiene products for your daily wellness routine.',
        },
        {
            icon: FolderTree,
            title: 'Organization',
            description: 'Smart storage solutions and organization products to keep your space tidy and clutter-free.',
        },
        {
            icon: Heart,
            title: 'Wellness & Comfort',
            description: 'Products designed to enhance your comfort, relaxation, and overall wellbeing at home.',
        },
        {
            icon: Package,
            title: 'Storage Solutions',
            description: 'Innovative storage products that help you maximize space and keep everything organized.',
        },
        {
            icon: ShoppingBag,
            title: 'Daily Essentials',
            description: 'Thoughtfully curated everyday products that simplify routines and add value to your life.',
        },
    ];

    return (
        <section id="products" className="bg-(--color-grey) w-full">
            <div className="mx-auto max-w-[1440px] px-4 py-8 sm:px-6 sm:py-12 md:px-12 md:py-16 lg:px-16 lg:py-20 xl:px-20 xl:py-24">
                <div className="mb-6 flex flex-col items-center gap-3 text-center sm:mb-8 md:mb-10 lg:mb-12">
                    <h2 className="font-title text-[28px] font-extrabold text-(--color-dark-blue) sm:text-[32px] md:text-[36px] lg:text-[40px] xl:text-[44px]">
                        Our Product Categories
                    </h2>
                    <p className="font-body text-[15px] font-light text-(--color-black-grey) sm:text-[16px] md:text-[17px] lg:text-[18px]">
                        Quality Products for Every Aspect of Your Daily Life
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-5 xl:gap-6">
                    {productCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center gap-3 rounded-lg bg-(--color-white) p-5 text-center shadow-sm transition-shadow hover:shadow-md sm:p-6"
                            >
                                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-(--color-blue) bg-opacity-10">
                                    <IconComponent className="h-7 w-7 text-(--color-white)" />
                                </div>
                                <h3 className="font-title text-[18px] font-bold text-(--color-dark-blue) sm:text-[20px] md:text-[22px]">
                                    {category.title}
                                </h3>
                                <p className="font-body text-[13px] font-normal leading-[20px] text-(--color-black-grey) sm:text-[14px] sm:leading-[22px] md:text-[15px]">
                                    {category.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
