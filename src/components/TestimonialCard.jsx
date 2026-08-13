import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 p-6 flex flex-col justify-between hover:border-slate-300 transition-colors">
      <div>
        {/* Rating Stars & Quote Icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-1">
            {[...Array(testimonial.rating || 5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <Quote className="w-6 h-6 text-slate-200" />
        </div>

        {/* Quote text */}
        <p className="text-slate-700 text-sm italic mb-6 leading-relaxed">
          "{testimonial.quote}"
        </p>
      </div>

      {/* Author info */}
      <div className="flex items-center space-x-3 pt-4 border-t border-slate-100">
        <img
          src={testimonial.avatar}
          alt={testimonial.author}
          className="w-10 h-10 rounded-full object-cover border border-slate-200 shrink-0"
        />
        <div>
          <h4 className="text-sm font-bold text-slate-900 leading-tight">
            {testimonial.author}
          </h4>
          <p className="text-xs text-slate-500">
            {testimonial.role} • <span className="font-medium text-slate-700">{testimonial.company}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
