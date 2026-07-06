import { createElement, useCallback, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Check, Heart, MapPin, Share2, Star, Utensils, Wifi, Dumbbell, Car, ShieldCheck } from 'lucide-react';
import { getHotel } from '../../services/api';
import { formatPrice } from '../../utils/format';
import { useFavorites } from '../../hooks/useFavorites';
import ErrorState from '../../components/ErrorState';

const amenities = [[Wifi, 'High-speed Wi-Fi'], [Utensils, 'Breakfast available'], [Dumbbell, 'Fitness facilities'], [Car, 'Parking assistance'], [ShieldCheck, '24-hour front desk']];

export default function HotelDetails() {
  const { id } = useParams();
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { toggle, isFavorite } = useFavorites();
  const load = useCallback(async () => { setLoading(true); setError(''); try { setHotel(await getHotel(id)); } catch { setError('We could not find this stay. It may no longer be available.'); } finally { setLoading(false); } }, [id]);
  useEffect(() => { load(); }, [load]);
  if (loading) return <div className="detail-loading"><div className="spinner" /></div>;
  if (error) return <div className="container detail-error"><ErrorState message={error} retry={load} /><Link to="/hotels">Back to all stays</Link></div>;
  const photos = [hotel.thumbnail, ...(hotel.photos || [])].filter((v, i, a) => a.indexOf(v) === i).slice(0, 5);
  return <article className="details container">
    <Link className="back" to="/hotels"><ArrowLeft /> Back to stays</Link>
    <div className="detail-title"><div><div className="rating-line"><span><Star fill="currentColor" /> {hotel.rating}</span><i>•</i><span><MapPin /> {hotel.location}, India</span></div><h1>{hotel.name}</h1></div><div><button className="icon-label"><Share2 /> Share</button><button className={`icon-label ${isFavorite(hotel.id) ? 'active' : ''}`} onClick={() => toggle(hotel.id)}><Heart fill="currentColor" /> {isFavorite(hotel.id) ? 'Saved' : 'Save'}</button></div></div>
    <div className="gallery">{photos.map((photo, index) => <img key={photo} src={photo} alt={`${hotel.name} view ${index + 1}`} />)}</div>
    <div className="detail-layout"><div className="detail-main"><div className="host-line"><div><h2>An elevated stay in {hotel.location}</h2><p>Hotel stay · Thoughtfully selected · Guest favourite</p></div><span>H</span></div>
      <section><h2>About this stay</h2><p className="long-copy">{hotel.description}</p></section>
      <section><h2>What this place offers</h2><div className="amenities">{amenities.map(([icon, label]) => <div key={label}>{createElement(icon)}{label}</div>)}</div><small className="derived-note">Amenities are representative; confirm exact inclusions with the property.</small></section>
      <section className="availability"><Check /><div><h3>Available for your next escape</h3><p>Select your dates to check current room availability with the property.</p></div></section>
    </div><aside className="booking-card"><div className="booking-price"><strong>{formatPrice(hotel.price)}</strong><span> night</span></div><div className="booking-fields"><label>Check in<input type="date" /></label><label>Check out<input type="date" /></label><label className="guests">Guests<select><option>2 guests</option><option>1 guest</option><option>3 guests</option><option>4 guests</option></select></label></div><button className="btn full">Check availability</button><p>You will not be charged yet</p><div className="price-row"><span>{formatPrice(hotel.price)} × 1 night</span><span>{formatPrice(hotel.price)}</span></div><div className="price-row total"><strong>Total before taxes</strong><strong>{formatPrice(hotel.price)}</strong></div></aside></div>
  </article>;
}
