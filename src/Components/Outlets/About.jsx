import React from "react"

function About() {

    return (
        <div className="bg-gray-100 text-gray-700 text-[0.8rem] md:text-lg">

            <div class="container mx-auto px-4 py-8 max-w-2xl">
                <h2 class="text-2xl font-semibold mb-6 text-gray-700">About This Project</h2>
                <p class="mb-4">This e-commerce platform is a personal project, created to demonstrate a comprehensive understanding of modern web development practices and technologies. It showcases the ability to build a fully functional online store with features that provide a smooth and secure shopping experience, as well as a multi-vendor capability.</p>

                <h3 class="text-lg font-semibold mb-4">Key Features:</h3>
                <ul class="list-disc pl-5 mb-4 space-y-2">
                    <li><strong class="font-medium">Secure Customer Login:</strong> User authentication is handled with OTP verification, powered by <a href="https://appwrite.io/" class="text-gray-700 hover:underline">Appwrite</a>, ensuring secure access to customer accounts.</li>
                    <li><strong class="font-medium">Intuitive Product Navigation:</strong> Products are organized into categories (Men, Women, and Kids) with sub-sections (Top-wear, Bottom-wear, and Foot-wear) for easy browsing.</li>
                    <li><strong class="font-medium">Essential E-commerce Functionality:</strong> Customers can add items to their cart and proceed to a standard checkout process.</li>
                    <li><strong class="font-medium">Dynamic Product Search:</strong> A search bar in the header allows for quick and efficient product discovery.</li>
                    <li><strong class="font-medium">Multi-Vendor Capability:</strong> The platform includes a separate seller login, allowing sellers to create accounts and list their products. Seller access and privileges are distinct from customer accounts.</li>
                    <li><strong class="font-medium">Backend Infrastructure:</strong> <a href="https://appwrite.io/" class="text-gray-700 hover:underline">Appwrite</a> is used for backend services, providing a scalable and efficient solution.</li>
                    <li><strong class="font-medium">Image Management:</strong> <a href="https://cloudinary.com/" class="text-gray-700 hover:underline">Cloudinary</a> is used for efficient storage and delivery of product images.</li>
                    <li><strong class="font-medium">Frontend Development:</strong> The user interface is built with <a href="https://react.dev/" class="text-gray-700 hover:underline">React.js</a>, offering a dynamic and responsive user experience.</li>
                </ul>
                <p class="mb-4">This project demonstrates proficiency in building a complete e-commerce solution, integrating frontend technologies like React.js with backend services like Appwrite, and utilizing tools like Cloudinary for media management. It highlights the ability to create a secure, user-friendly, and functional online shopping experience with multi-vendor support.</p>
            </div>
        </div>
    )
}

export default About