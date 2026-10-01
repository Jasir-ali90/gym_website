import React, { useState } from 'react';
import { Calculator, MessageCircle, Activity, Flame, Target } from 'lucide-react';

export default function BmiCalculator() {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(24);
  const [heightFeet, setHeightFeet] = useState(5);
  const [heightInches, setHeightInches] = useState(9);
  const [weightKg, setWeightKg] = useState(72);
  const [activityGoal, setActivityGoal] = useState('hypertrophy'); // 'loss' | 'hypertrophy' | 'strength'

  // Calculations
  const totalInches = (parseInt(heightFeet) || 0) * 12 + (parseInt(heightInches) || 0);
  const heightMeters = totalInches * 0.0254;
  const weight = parseFloat(weightKg) || 0;
  
  const bmi = heightMeters > 0 ? (weight / (heightMeters * heightMeters)).toFixed(1) : 0;

  let bmiCategory = 'Normal Weight';
  let categoryColor = '#10b981';
  if (bmi < 18.5) {
    bmiCategory = 'Underweight';
    categoryColor = '#38bdf8';
  } else if (bmi >= 25 && bmi < 29.9) {
    bmiCategory = 'Overweight';
    categoryColor = '#f59e0b';
  } else if (bmi >= 30) {
    bmiCategory = 'Obese (Need Transformation)';
    categoryColor = '#ef4444';
  }

  // Daily target calorie estimation based on Mifflin-St Jeor equation
  const baseBmr = gender === 'male' 
    ? (10 * weight + 6.25 * (heightMeters * 100) - 5 * age + 5)
    : (10 * weight + 6.25 * (heightMeters * 100) - 5 * age - 161);

  let targetCalories = Math.round(baseBmr * 1.4);
  let proteinTarget = Math.round(weight * 2.0); // 2g per kg

  if (activityGoal === 'loss') {
    targetCalories -= 450;
    proteinTarget = Math.round(weight * 2.2);
  } else if (activityGoal === 'hypertrophy') {
    targetCalories += 300;
    proteinTarget = Math.round(weight * 2.0);
  } else if (activityGoal === 'strength') {
    targetCalories += 450;
    proteinTarget = Math.round(weight * 2.1);
  }

  const whatsappMessage = `Salam Coach Ahmed Khan! I calculated my fitness stats on Premium Fitness Chapter 1.O website:
- Gender: ${gender === 'male' ? 'Male' : 'Female'}
- Age: ${age} yrs
- Height: ${heightFeet}ft ${heightInches}in
- Weight: ${weightKg} kg
- BMI: ${bmi} (${bmiCategory})
- Fitness Goal: ${activityGoal.toUpperCase()}
- Target Calories: ~${targetCalories} kcal
- Target Protein: ~${proteinTarget}g
Please guide me with a customized diet & training plan!`;

  return (
    <section id="calculator" style={{ padding: '85px 0', backgroundColor: 'var(--bg-primary)', position: 'relative' }}>
      <div className="container">
        {/* Section Heading */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 36px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#ff4d56',
            fontWeight: 800,
            fontSize: '0.82rem',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '10px'
          }}>
            <Calculator size={15} /> BODY COMPOSITION TOOL
          </div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.9rem, 3.8vw, 2.9rem)',
            fontWeight: 900,
            textTransform: 'uppercase',
            lineHeight: 1.15,
            marginBottom: '14px'
          }}>
            CALCULATE YOUR <br />
            <span className="text-red-gradient">BMI & CALORIE TARGET</span>
          </h2>
          <p style={{ color: '#94a3b8', fontSize: '1rem' }}>
            Instant body metrics calculated and ready to sync with Coach Ahmed Khan on WhatsApp.
          </p>
        </div>

        {/* Calculator Body Grid */}
        <div className="glass-panel" style={{
          padding: 'clamp(20px, 4vw, 36px)',
          maxWidth: '980px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(18, 21, 28, 0.95) 0%, rgba(10, 12, 16, 0.98) 100%)',
          border: '1px solid rgba(229, 9, 20, 0.35)',
          boxShadow: '0 20px 50px rgba(0,0,0,0.7)'
        }}>
          <div className="grid-2" style={{ gap: '30px' }}>
            {/* Left Inputs Column */}
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Target size={17} style={{ color: '#ff4d56' }} /> Enter Body Details
              </h3>

              {/* Gender selector */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Gender
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                  <button
                    type="button"
                    onClick={() => setGender('male')}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      border: gender === 'male' ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                      background: gender === 'male' ? 'rgba(229, 9, 20, 0.2)' : 'rgba(255,255,255,0.03)',
                      color: gender === 'male' ? '#fff' : '#94a3b8',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Male
                  </button>
                  <button
                    type="button"
                    onClick={() => setGender('female')}
                    style={{
                      padding: '10px',
                      borderRadius: '8px',
                      border: gender === 'female' ? '1.5px solid #ec4899' : '1px solid rgba(255,255,255,0.1)',
                      background: gender === 'female' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(255,255,255,0.03)',
                      color: gender === 'female' ? '#f472b6' : '#94a3b8',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Female (Ladies Timings)
                  </button>
                </div>
              </div>

              {/* Height Inputs */}
              <div style={{ marginBottom: '16px' }}>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Height (Feet & Inches)
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  <div>
                    <input
                      type="number"
                      min="3"
                      max="7"
                      value={heightFeet}
                      onChange={(e) => setHeightFeet(e.target.value)}
                      placeholder="Feet"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem'
                      }}
                    />
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '2px', display: 'block' }}>Feet (e.g. 5)</span>
                  </div>
                  <div>
                    <input
                      type="number"
                      min="0"
                      max="11"
                      value={heightInches}
                      onChange={(e) => setHeightInches(e.target.value)}
                      placeholder="Inches"
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        background: 'rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.12)',
                        borderRadius: '8px',
                        color: '#fff',
                        fontSize: '0.9rem'
                      }}
                    />
                    <span style={{ fontSize: '0.7rem', color: '#94a3b8', marginTop: '2px', display: 'block' }}>Inches (e.g. 9)</span>
                  </div>
                </div>
              </div>

              {/* Weight & Age */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Weight (KG)
                  </label>
                  <input
                    type="number"
                    min="35"
                    max="180"
                    value={weightKg}
                    onChange={(e) => setWeightKg(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px', textTransform: 'uppercase' }}>
                    Age (Years)
                  </label>
                  <input
                    type="number"
                    min="14"
                    max="80"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px 12px',
                      background: 'rgba(0,0,0,0.5)',
                      border: '1px solid rgba(255,255,255,0.12)',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '0.9rem'
                    }}
                  />
                </div>
              </div>

              {/* Goal */}
              <div>
                <label style={{ display: 'block', fontSize: '0.8rem', fontWeight: 700, color: '#cbd5e1', marginBottom: '6px', textTransform: 'uppercase' }}>
                  Target Goal
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
                  <button
                    type="button"
                    onClick={() => setActivityGoal('loss')}
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      border: activityGoal === 'loss' ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                      background: activityGoal === 'loss' ? 'rgba(229, 9, 20, 0.2)' : 'rgba(255,255,255,0.03)',
                      color: activityGoal === 'loss' ? '#fff' : '#94a3b8',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Fat Loss
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivityGoal('hypertrophy')}
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      border: activityGoal === 'hypertrophy' ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                      background: activityGoal === 'hypertrophy' ? 'rgba(229, 9, 20, 0.2)' : 'rgba(255,255,255,0.03)',
                      color: activityGoal === 'hypertrophy' ? '#fff' : '#94a3b8',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Muscle Gain
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivityGoal('strength')}
                    style={{
                      padding: '8px',
                      borderRadius: '8px',
                      border: activityGoal === 'strength' ? '1.5px solid #ef4444' : '1px solid rgba(255,255,255,0.1)',
                      background: activityGoal === 'strength' ? 'rgba(229, 9, 20, 0.2)' : 'rgba(255,255,255,0.03)',
                      color: activityGoal === 'strength' ? '#fff' : '#94a3b8',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    Strength
                  </button>
                </div>
              </div>
            </div>

            {/* Right Output Scorecard */}
            <div style={{
              background: 'rgba(0,0,0,0.45)',
              border: '1px solid rgba(229, 9, 20, 0.35)',
              borderRadius: '14px',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.8rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    Calculated Result
                  </span>
                  <span style={{
                    background: 'rgba(255,255,255,0.06)',
                    color: categoryColor,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    border: `1px solid ${categoryColor}`
                  }}>
                    {bmiCategory}
                  </span>
                </div>

                {/* Big BMI Number */}
                <div style={{ textAlign: 'center', padding: '12px 0', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Body Mass Index (BMI)</div>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '3.4rem',
                    fontWeight: 900,
                    color: '#fff',
                    lineHeight: 1.1
                  }}>
                    {bmi}
                  </div>
                </div>

                {/* Macro Target Breakdown */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '16px' }}>
                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#ff4d56', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                      <Flame size={13} /> Daily Calories
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginTop: '4px', fontFamily: 'var(--font-display)' }}>
                      ~{targetCalories} <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>kcal</span>
                    </div>
                  </div>

                  <div style={{ background: 'rgba(255,255,255,0.03)', padding: '12px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px', color: '#06b6d4', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase' }}>
                      <Activity size={13} /> Daily Protein
                    </div>
                    <div style={{ fontSize: '1.35rem', fontWeight: 800, color: '#fff', marginTop: '4px', fontFamily: 'var(--font-display)' }}>
                      ~{proteinTarget} <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>grams</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Consultation Link */}
              <div style={{ marginTop: '20px' }}>
                <a
                  href={`https://wa.me/923132229925?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    padding: '12px',
                    fontSize: '0.88rem',
                    textAlign: 'center'
                  }}
                >
                  <MessageCircle size={16} />
                  <span>Send Stats to Coach on WhatsApp</span>
                </a>
                <p style={{ textAlign: 'center', fontSize: '0.72rem', color: '#94a3b8', marginTop: '6px' }}>
                  Coach Ahmed Khan will suggest your personalized Pakistani diet plan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
