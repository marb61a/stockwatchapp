class CreateDerivatives < ActiveRecord::Migration
  def change
    create_table :derivatives do |t|
      t.string :symbol
      t.string :name

      t.timestamps
    end
  end
end
