get '/' do
  File.read('./app/views/index.html')
end

get '/api/contacts' do
  Contact.all.to_json
end

get '/api/contact/:id' do
  Contact.where(id: params['id']).first.to_json
end

post '/api/contact' do
  if params.has_key?('first_name') && params.has_key?('last_name') && params.has_key?('phone_number')
    newContact = Contact.new(params)
    newContact.save
  end
end

put '/api/contact/:id' do
  contact = Contact.where(id: params['id']).first
  if contact
    if params.has_key?('first_name')
      contact.first_name = params['first_name']
    end

    if params.has_key?('last_name')
      contact.last_name = params['last_name']
    end

    if params.has_key?('phone_number')
      contact.phone_number = params['phone_number']
    end
    contact.save
  end

end

delete '/api/contact/:id' do
  Contact.where(id: params['id']).destroy_all
end