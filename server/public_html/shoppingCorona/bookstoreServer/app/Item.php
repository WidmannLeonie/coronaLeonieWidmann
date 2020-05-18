<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Item extends Model
{
    protected $fillable = [
        'id',
        'description',
        'amount',
        'max_price',
        'completed',
        'lists_id'
        ];

    public function lists() : BelongsTo{
        return $this->belongsTo(Lists::class);
    }
}
