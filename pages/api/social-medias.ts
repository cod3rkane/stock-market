const medias = [
  {
    id: '1D',
    title: 'Twitter',
    description: 'twitter.com',
    icon: 'icon-social-twitter',
  },
  {
    id: '2D',
    title: 'Facebook',
    description: 'facebook.com',
    icon: 'icon-social-facebook',
  },
  {
    id: '3D',
    title: 'Instagram',
    description: 'instagram.com',
    icon: 'icon-social-instagram',
  },
  {
    id: '4D',
    title: 'LinkedIn',
    description: 'linkedin.com',
    icon: 'icon-social-linkedin',
  },
]

export default (req, res) => {
  res.statusCode = 200

  res.json({ items: medias })
}
