<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Comments extends Model
{
    protected $fillable = ['text', 'lists_id'];

    public function lists() : BelongsTo{
        return $this->belongsTo(Lists::class);
    }

    public function user() : HasMany {
        return $this->hasMany(User::class);
    }
}
