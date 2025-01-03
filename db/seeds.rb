require "open-uri"

# Clear existing data
PreciousGem.destroy_all

# Sample gem data with valid image URLs
gems = [
  {
    name: "Diamond",
    quantity: 10,
    price_cents: 500_00, # $500.00
    image_url: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=500"
  },
  {
    name: "Emerald",
    quantity: 15,
    price_cents: 300_00, # $300.00
    image_url: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=500"
  },
  {
    name: "Ruby",
    quantity: 8,
    price_cents: 400_00, # $400.00
    image_url: "https://images.unsplash.com/photo-1617042375876-a13e36732a04?w=500"
  },
  {
    name: "Sapphire",
    quantity: 12,
    price_cents: 350_00, # $350.00
    image_url: "https://images.unsplash.com/photo-1595278069441-2cf29f8005a4?w=500"
  }
]

# Create gems and attach images
gems.each do |gem_data|
  gem = PreciousGem.create!(
    name: gem_data[:name],
    quantity: gem_data[:quantity],
    price_cents: gem_data[:price_cents]
  )

  # Download and attach image
  image = URI.parse(gem_data[:image_url]).open
  gem.photo.attach(io: image, filename: "#{gem_data[:name].downcase}.jpg")
end

puts "Created #{PreciousGem.count} gems with images!"
