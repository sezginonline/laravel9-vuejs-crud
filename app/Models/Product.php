<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'picture',
    ];

    public function getCreatedAtAttribute($value)
    {
        return date('d F Y H:i', strtotime($value));
    }
}
