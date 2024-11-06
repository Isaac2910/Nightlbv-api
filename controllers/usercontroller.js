import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();


// Login
export const userLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    });

    if (!user) {
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Identifiants incorrects" });
    }

    const token = jwt.sign({ userId: user.id }, jwtSecret, { expiresIn: '1h' });
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Register
export const userRegister = async (req, res) => {
  const { nomUser, prenom, email, age, sexe, goutMusical, boisson, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const user = await prisma.user.create({
      data: { nomUser, prenom, email, age, sexe, goutMusical, boisson, password: hashedPassword }
    });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Comment
export const userComments = async (req, res) => {
  const { userId, content } = req.body;

  try {
    const comment = await prisma.comment.create({
      data: { userId, content }
    });
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

// Note
export const userNote = async (req, res) => {
  const { userId, note } = req.body;

  try {
    const userNote = await prisma.note.create({
      data: { userId, note }
    });
    res.json(userNote);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Erreur serveur" });
  }
};

