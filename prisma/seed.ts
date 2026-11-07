import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Create admin user
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@kierahomes.com' },
    update: {},
    create: {
      email: 'admin@kierahomes.com',
      name: 'Admin User',
      role: 'ADMIN',
    },
  })

  // Create sample projects
  const sampleProjects = [
    {
      title: 'Kiera Heights',
      slug: 'kiera-heights',
      status: 'PUBLISHED' as const,
      featured: true,
      location: 'Gurgaon, Delhi NCR',
      city: 'Gurgaon',
      coverUrl: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      brochureUrl: '/brochures/kiera-heights.pdf',
      description: 'Kiera Heights represents the pinnacle of luxury living in Delhi NCR\'s most sought-after location. This completed project features meticulously designed 2 and 3 BHK apartments with premium finishes, state-of-the-art amenities, and unmatched connectivity to the city\'s business districts.',
      shortDescription: 'Luxury 2 & 3 BHK apartments in Gurgaon with premium amenities and excellent connectivity.',
      priceRange: '₹1.2Cr - ₹2.5Cr',
      startingPrice: 12000000,
      priceBand: 'luxury',
      propertyType: 'residential',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Club House'],
      images: [
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop'
      ],
      semiFurnished: true,
      fullyFurnished: false,
    },
    {
      title: 'Kiera Gardens',
      slug: 'kiera-gardens',
      status: 'PUBLISHED' as const,
      featured: true,
      location: 'Noida, Delhi NCR',
      city: 'Noida',
      coverUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      brochureUrl: '/brochures/kiera-gardens.pdf',
      description: 'Kiera Gardens offers a perfect blend of modern living and natural beauty. Located in the heart of Noida, this project features spacious 2, 3, and 4 BHK apartments with premium amenities and lush green surroundings.',
      shortDescription: 'Modern 2, 3 & 4 BHK apartments in Noida with lush green surroundings and premium amenities.',
      priceRange: '₹80L - ₹1.8Cr',
      startingPrice: 8000000,
      priceBand: 'premium',
      propertyType: 'residential',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden', 'Playground'],
      images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop'
      ],
      semiFurnished: false,
      fullyFurnished: true,
    },
    {
      title: 'Kiera Plaza',
      slug: 'kiera-plaza',
      status: 'PUBLISHED' as const,
      featured: false,
      location: 'Dwarka, Delhi NCR',
      city: 'Dwarka',
      coverUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      brochureUrl: '/brochures/kiera-plaza.pdf',
      description: 'Kiera Plaza is a modern commercial and residential complex in Dwarka. This project offers premium office spaces and luxury apartments with world-class amenities and excellent connectivity.',
      shortDescription: 'Modern commercial and residential complex in Dwarka with premium office spaces and luxury apartments.',
      priceRange: '₹1.5Cr - ₹3Cr',
      startingPrice: 15000000,
      priceBand: 'luxury',
      propertyType: 'mixed-use',
      amenities: ['Office Spaces', 'Parking', 'Security', 'Conference Room', 'Cafeteria'],
      images: [
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop'
      ],
      semiFurnished: true,
      fullyFurnished: true,
    },
    {
      title: 'Kiera Residency',
      slug: 'kiera-residency',
      status: 'DRAFT' as const,
      featured: false,
      location: 'Greater Noida, Delhi NCR',
      city: 'Greater Noida',
      coverUrl: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      brochureUrl: '/brochures/kiera-residency.pdf',
      description: 'Kiera Residency is an upcoming luxury residential project in Greater Noida. This project will feature modern 2 and 3 BHK apartments with premium amenities and excellent connectivity to Delhi NCR.',
      shortDescription: 'Upcoming luxury 2 & 3 BHK apartments in Greater Noida with modern amenities.',
      priceRange: '₹60L - ₹1.2Cr',
      startingPrice: 6000000,
      priceBand: 'mid-range',
      propertyType: 'residential',
      amenities: ['Swimming Pool', 'Gym', 'Parking', 'Security', 'Garden'],
      images: [
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop'
      ],
      semiFurnished: false,
      fullyFurnished: false,
    },
  ]

  for (const projectData of sampleProjects) {
    const project = await prisma.project.upsert({
      where: { slug: projectData.slug },
      update: {},
      create: projectData,
    })

    // Create sample enquiries for each project
    const sampleEnquiries = [
      {
        name: 'Rajesh Kumar',
        email: 'rajesh.kumar@email.com',
        phone: '+91 98765 43210',
        message: 'I am interested in 3 BHK apartment. Please provide more details about pricing and availability.',
        status: 'NEW' as const,
        projectId: project.id,
      },
      {
        name: 'Priya Sharma',
        email: 'priya.sharma@email.com',
        phone: '+91 87654 32109',
        message: 'Would like to schedule a site visit for this weekend. Please confirm availability.',
        status: 'CONTACTED' as const,
        projectId: project.id,
      },
    ]

    for (const enquiryData of sampleEnquiries) {
      await prisma.enquiry.upsert({
        where: { 
          id: `${project.id}-${enquiryData.email}` // Simple unique constraint
        },
        update: {},
        create: enquiryData,
      })
    }
  }

  console.log('Database seeded successfully!')
  console.log('Admin user created: admin@kierahomes.com / admin123')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })