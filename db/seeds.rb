

puts "Seeding ... 🧠"

User.destroy_all 
GameQuestion.destroy_all


q1 =  GameQuestion.create(text: "What country has the highest life expectancy?", correct_answers: " Hong Kong", incorrect_answers: "Japan, Brazil , Congo" )
q2=  GameQuestion.create(text: "What is the most common surname in the United States?",  correct_answers: "Smith", incorrect_answers:"James ,Bob , Marie" )
q3=  GameQuestion.create(text: "What year was the United Nations established?",correct_answers: "1945", incorrect_answers: " 1970, 1965 ,1890")
q4=  GameQuestion.create(text: "How many ghosts chase Pac-Man at the start of each game?", correct_answers: "4", incorrect_answers: "2, 5 , 3" )
q5 = GameQuestion.create(text: "What character has both Robert Downey Jr. and Benedict Cumberbatch played? ", correct_answers:"Sherlock Holmes", incorrect_answers: " Iron-Man, Doctor-Strange")
q7 =  GameQuestion.create(text:"Which planet has the most moons?",correct_answers:"Saturn", incorrect_answers: "Sun, Uranus, Earth")

30.times do 
    User.create({
     name: Faker::Name.name,
      email: Faker::Internet.free_email,
      password_digest: Faker::Internet.password
    })
  end

  puts "Seeding is Complete! 🙌🏻 "