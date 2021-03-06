<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Address extends Model
{
    protected $fillable = ['street', 'country', 'number', 'postalCode', 'city'];

    public function users() : BelongsToMany{
        return $this->belongsToMany(User::class);
    }
}
