class CreateGems < ActiveRecord::Migration[8.0]
  def change
    create_table :gems do |t|
      t.string :name, null: false
      t.integer :quantity, null: false, default: 0
      t.integer :price_cents, null: false

      t.timestamps
    end
  end
end
