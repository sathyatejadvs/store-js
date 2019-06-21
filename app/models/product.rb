class Product
  include Mongoid::Document
	include Mongoid::Timestamps
	   
  field :name, type: String
  field :price, type: BigDecimal
  field :released_on, type: Date
  validates_presence_of :name
  embeds_many :reviews
end
