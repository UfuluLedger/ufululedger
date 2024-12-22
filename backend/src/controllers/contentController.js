class ContentController {
    constructor(contentService) {
        this.contentService = contentService;
    }

    async registerContent(req, res) {
        const { title, description, contentHash } = req.body;
        try {
            const result = await this.contentService.registerContent(title, description, contentHash);
            res.status(201).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async transferOwnership(req, res) {
        const { contentHash, newOwner } = req.body;
        try {
            const result = await this.contentService.transferOwnership(contentHash, newOwner);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async getContent(req, res) {
        const { contentHash } = req.params;
        try {
            const content = await this.contentService.getContent(contentHash);
            res.status(200).json(content);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }

    async getUserContents(req, res) {
        const { owner } = req.params;
        try {
            const contents = await this.contentService.getUserContents(owner);
            res.status(200).json(contents);
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
}

export default ContentController;