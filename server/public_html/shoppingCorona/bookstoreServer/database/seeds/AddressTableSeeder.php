<?php

use Illuminate\Database\Seeder;

class AddressTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $address = new \App\Address;
        $address->street = 'Laudongasse';
        $address->city = 'Wien';
        $address->country = 'Österreich';
        $address->number = 60;
        $address->postalCode = 1080;
        $address->save();

       $address2 = new \App\Address;
        $address2->street = 'Claudia de Medicistraße';
        $address2->city = 'Bozen';
        $address2->country = 'Italien';
        $address2->number = 43;
        $address2->postalCode = 39100;
        $address2->save();
    }
}
