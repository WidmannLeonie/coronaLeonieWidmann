<?php

namespace App;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Model;
use phpDocumentor\Reflection\Types\Void_;

class Lists extends Model
{
    protected $fillable = ['id', 'final_sum', 'due_date', 'name', 'user_id', 'item_id', 'volunteer_id'];


    public function users() : BelongsTo{
        return $this->belongsTo(User::class);
    }

    public function items() : HasMany{
    return $this->hasMany(Item::class);
}

    public function comments() : HasMany{
        return $this->hasMany(Comments::class);
    }

}
