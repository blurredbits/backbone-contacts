require 'faker'

if Contact.count == 0
  5.times do
    c = Contact.new
    c.first_name      = Faker::Name.first_name
    c.last_name       = Faker::Name.last_name
    c.phone_number    = Faker::PhoneNumber.phone_number
    c.save!
  end
end