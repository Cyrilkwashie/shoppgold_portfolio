'use client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

type FormData = {
  fullName: string
  email: string
  occasion: string
  dressVision: string
  budgetRange: string
  referralSource: string
}

const inputClass =
  'w-full bg-transparent border-b border-ink/30 py-3 font-jost font-light text-sm focus:outline-none focus:border-gold transition-colors'

export default function InquiryForm() {
  const [submitted, setSubmitted] = useState(false)
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FormData>()

  const occasion = watch('occasion')
  const budgetRange = watch('budgetRange')

  const onSubmit = (data: FormData) => {
    console.log('Inquiry submitted:', data)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-12 text-center">
        <p className="font-cormorant italic text-3xl font-light text-ink">
          Thank you for reaching out.
        </p>
        <p className="font-jost font-light text-sm text-ink-muted mt-4">
          Shikatel will be in touch within 48 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <input
          {...register('fullName', { required: 'Full name is required' })}
          placeholder="Full Name *"
          className={inputClass}
        />
        {errors.fullName && (
          <p className="text-red-500 text-xs mt-1 font-jost">{errors.fullName.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Please enter a valid email',
            },
          })}
          type="email"
          placeholder="Email *"
          className={inputClass}
        />
        {errors.email && (
          <p className="text-red-500 text-xs mt-1 font-jost">{errors.email.message}</p>
        )}
      </div>

      <div>
        <Select
          value={occasion}
          onValueChange={(value) => setValue('occasion', value, { shouldValidate: true })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Occasion *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="wedding">Wedding</SelectItem>
            <SelectItem value="evening">Evening Event</SelectItem>
            <SelectItem value="cocktail">Cocktail</SelectItem>
            <SelectItem value="red-carpet">Red Carpet</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        <input
          type="hidden"
          {...register('occasion', { required: 'Please select an occasion' })}
        />
        {errors.occasion && (
          <p className="text-red-500 text-xs mt-1 font-jost">{errors.occasion.message}</p>
        )}
      </div>

      <div>
        <textarea
          {...register('dressVision', { required: 'Please describe your vision' })}
          placeholder="Dress Vision *"
          rows={4}
          className={`${inputClass} resize-none`}
        />
        {errors.dressVision && (
          <p className="text-red-500 text-xs mt-1 font-jost">{errors.dressVision.message}</p>
        )}
      </div>

      <div>
        <Select
          value={budgetRange}
          onValueChange={(value) => setValue('budgetRange', value, { shouldValidate: true })}
        >
          <SelectTrigger>
            <SelectValue placeholder="Budget Range *" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1000-2500">$1,000 – $2,500</SelectItem>
            <SelectItem value="2500-5000">$2,500 – $5,000</SelectItem>
            <SelectItem value="5000-10000">$5,000 – $10,000</SelectItem>
            <SelectItem value="10000+">$10,000+</SelectItem>
          </SelectContent>
        </Select>
        <input
          type="hidden"
          {...register('budgetRange', { required: 'Please select a budget range' })}
        />
        {errors.budgetRange && (
          <p className="text-red-500 text-xs mt-1 font-jost">{errors.budgetRange.message}</p>
        )}
      </div>

      <div>
        <input
          {...register('referralSource', { required: 'This field is required' })}
          placeholder="How did you hear about us? *"
          className={inputClass}
        />
        {errors.referralSource && (
          <p className="text-red-500 text-xs mt-1 font-jost">{errors.referralSource.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-night text-on-night font-jost text-[11px] uppercase tracking-[0.2em] py-5 mt-6 hover:bg-gold hover:text-on-accent transition-colors duration-300"
      >
        Submit Inquiry
      </button>
    </form>
  )
}
