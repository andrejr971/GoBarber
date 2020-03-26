import Notification from '../schemas/Notification';
import User from '../models/User';

class NotificationContoller {
  async index(req, res) {
    const isProvider = await User.findOne({
      where: { id: req.userId, provider: true },
    });

    if (!isProvider) {
      return res.status(401).json({ error: 'Falha ao encontar o prestador' });
    }

    const notification = await Notification.find({
      user: req.userId,
    })
      .sort({ createdAt: 'desc' })
      .limit(20);

    return res.json(notification);
  }

  async update(req, res) {
    const notification = await Notification.findByIdAndUpdate(
      req.params.id,
      { read: true },
      { new: true }
      // retorna o novo registro atualizado
    );

    return res.json(notification);
  }
}

export default new NotificationContoller();
