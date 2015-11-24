class CreateProfiles < ActiveRecord::Migration
  def change
    create_table :profiles do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.string :job_title, null: false
      t.string :phone_number
      t.string :contact_email, null: false
      t.text :description, null: false

      t.timestamps null: false
    end
  end
end
